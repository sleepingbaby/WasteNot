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
        return Response({"pantry_items": serializeditems.data})


    def post(self, request):
        request.data["user_id"] = request.user
        # item_name = request.data['item_name']
        # print(item_name)
        # user = request.user
        # item = PantryItem.objects.create(item_name=item_name, user_id=user)
        item = PantryItem.objects.create(**request.data)
        # serializeditem = PantryItemSerializer(item)
        items = request.user.pantryitems.all()
        serializeditems = PantryItemSerializer(items, many=True)
        # return Response({"item": serializeditem.data})
        return Response({"pantry_items": serializeditems.data})

class A_pantry_item(User_permissions): #api/pantryitem/{id}/
    
    def get(self, request, id):
        print(id, request.user)
        item = get_object_or_404(request.user.pantryitems, id=id)
        serializeditem = PantryItemSerializer(item)
        return Response({"item": serializeditem.data})

    def put(self, request, id):
        item = get_object_or_404(request.user.pantryitems, id=id)
        item.item_name = request.data['item_name']
        item.save()
        serializeditem = PantryItemSerializer(item)
        return Response({'new_item': serializeditem.data})

    def delete(self, request, id):
        request.user.pantryitems.filter(id=id).delete()
        return Response(status=HTTP_204_NO_CONTENT)