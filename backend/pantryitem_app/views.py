from django.shortcuts import render
# from rest_framework.views import APIView
from user_app.views import User_permissions
from rest_framework.response import Response

# Create your views here.
class All_pantry_items(User_permissions): #api/pantryitem/
    def get(self, request):
        items = request.user.pantryitems.all()
        pass


    def post(self, request):
        pass

class A_pantry_item(User_permissions): #api/pantryitem/{id}/
    def get(self, request, id):
        pass

    def put(self, request, id):
        pass

    def delete(self, request, id):
        pass