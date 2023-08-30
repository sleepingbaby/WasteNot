from django.shortcuts import render, get_object_or_404
# from rest_framework.views import APIView
from user_app.views import User_permissions
from rest_framework.response import Response
from .serializers import PantryItemSerializer
from .models import PantryItem
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
)

# Create your views here.
class All_pantry_items(User_permissions): #api/pantryitem/
    
    def get(self, request):
        items = request.user.pantryitems.all()
        serializeditems = PantryItemSerializer(items, many=True)
        return Response({"Pantry_items": serializeditems})


    def post(self, request):
        item_name = request.data['item_name']
        user = request.user
        item = PantryItem.objects.create(item_name=item_name, user_id=user)
        serializeditem = PantryItemSerializer(item)
        return Response({"item": serializeditem})

class A_pantry_item(User_permissions): #api/pantryitem/{id}/
    
    def get(self, request, id):
        item = get_object_or_404(request.user.pantryitems, id=id)
        serializeditem = PantryItemSerializer(item)
        return Response({"item": serializeditem})

    def put(self, request, id):
        item = get_object_or_404(request.user.pantryitems, id=id)
        item.item_name = request.data['item_name']
        item.save()
        serializeditem = PantryItemSerializer(item)
        return Response({'new_item': serializeditem})

    def delete(self, request, id):
        request.user.pantryitems.filter(id=id).delete()
        return Response(status=HTTP_204_NO_CONTENT)