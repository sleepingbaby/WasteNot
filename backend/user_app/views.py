from django.shortcuts import render
from rest_framework.views import APIView
from datetime import datetime, timedelta
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, logout
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import User
from utilities import HttpOnlyTokenAuthentication

from django.dispatch import receiver
from django.urls import reverse
# from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail, EmailMessage
@receiver(reset_password_token_created)

def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    # the below like concatinates your websites reset password url and the reset email token which will be required at a later stage
    email_plaintext_message = "Open the link to reset your password" + " " + "{}{}".format(instance.request.build_absolute_uri("http://localhost:5173/password-reset-confirm/"), f"{reset_password_token.user.id}/{reset_password_token.key}")
    
    """
        this below line is the django default sending email function, 
        takes up some parameter (title(email title), message(email body), from(email sender), to(recipient(s))
    """
    send_mail(
        # title:
        "Password Reset for {title}".format(title="WasteNot"),
        # message:
        email_plaintext_message,
        # from:
        "info@yourcompany.com",
        # to:
        [reset_password_token.user.email],
        fail_silently=False,
    )

# Create your views here.

class User_permissions(APIView):
    authentication_classes = [HttpOnlyTokenAuthentication]
    permission_classes = [IsAuthenticated]

class Log_in(APIView):
    def post(self, request):
        request.data["username"] = request.data["email"]
        user = authenticate(**request.data)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            # Right now, cookies expire after 1 day --> Feel free to change to greater or less time.
            life_time = datetime.now() + timedelta(days=1)
            format_life_time = life_time.strftime("%a, %d %b %Y %H:%M:%S GMT")
            # print(f"Original {life_time}         New: {format_life_time}")
            # response = Response({"user": {"email": user.email}})
            response = Response({"user": {"email": user.email,"first_name": user.first_name, "last_name": user.last_name}})
            response.set_cookie(key="token", value=token.key, httponly=True, secure=True, samesite="Lax", expires=format_life_time)
            return response
        else:
            return Response("Something went wrong", status=HTTP_400_BAD_REQUEST)

class Sign_up(APIView):
    def post(self, request):
        try: 
            request.data["username"] = request.data["email"]
            user = User.objects.create_user(**request.data)
            print(user)
            token, created = Token.objects.get_or_create(user=user)
            response = Response({"user": {"email": user.email, "first_name": user.first_name, "last_name": user.last_name}})
            # Right now, cookies expire after 1-day --> Feel free to change to greater or less time.
            life_time = datetime.now() + timedelta(days=1)
            format_life_time = life_time.strftime("%a, %d %b %Y %H:%M:%S GMT")
            response.set_cookie(key="token", value=token.key, httponly=True, secure=True, samesite="Lax", expires=format_life_time)
            return response
        except:
            return Response("Something went wrong", status=HTTP_400_BAD_REQUEST)
    
class Info(User_permissions):
    def get(self, request):
        return Response({"email": request.user.email, "first_name": request.user.first_name, "last_name": request.user.last_name})
    
    def put(self, request):
        user = request.user
        user.first_name = request.data.get("first_name")
        user.last_name = request.data.get("last_name")
        user.email = request.data.get("email")
        user.save()
        return Response({"first_name": user.first_name, "last_name": user.last_name, "email": user.email})

class Log_out(User_permissions):
    def post(self, request):
        request.user.auth_token.delete()
        response = Response(status=HTTP_204_NO_CONTENT)
        response.delete_cookie("token")
        return response 

class Active_status(User_permissions):
    def put(self, request):
        user = request.user
        user.is_active = request.data.get("is_active")
        user.save()
        logout(request)
        return Response( { "is_active":user.is_active })
    
