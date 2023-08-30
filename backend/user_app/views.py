from django.shortcuts import render
from rest_framework.views import APIView
from datetime import datetime, timedelta
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import User
from utilities import HttpOnlyTokenAuthentication

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
            life_time = datetime.now() + timedelta(days=7)
            format_life_time = life_time.strftime("%a, %d %b %Y %H:%M:%S GMT")
            response = Response({"user": {"email": user.email}})
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
            response = Response({"user": {"email": user.email}})
            life_time = datetime.now() + timedelta(days=7)
            format_life_time = life_time.strftime("%a, %d %b %Y %H:%M:%S GMT")
            response.set_cookie(key="token", value=token.key, httponly=True, secure=True, samesite="Lax", expires=format_life_time)
            return response
        except:
            return Response("Something went wrong", status=HTTP_400_BAD_REQUEST)
    
class Info(User_permissions):
    pass 

class Log_out(User_permissions):
    pass 

class Delete(User_permissions):
    pass 
