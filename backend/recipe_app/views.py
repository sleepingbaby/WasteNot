from django.shortcuts import render, get_object_or_404
# from rest_framework.views import APIView
from user_app.views import User_permissions
from rest_framework.response import Response
from .serializers import RecipeSerializer
from recipe_app.models import Recipe
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
)
# Create your views here.

class All_recipes(User_permissions):

    def get(self, request):
        recipes = request.user.recipes.all()
        serializedrecipes = RecipeSerializer(recipes, many=True)
        return Response({"recipes": serializedrecipes.data})

    def post(self, request):
        request.data['user_id'] = request.user.id
        serializedrecipe = RecipeSerializer(data=request.data)
        if serializedrecipe.is_valid():
            serializedrecipe.save()
            return Response({"recipe": serializedrecipe.data}, status=HTTP_201_CREATED)
        else:
            return Response(serializedrecipe.errors, status=HTTP_400_BAD_REQUEST)

class A_recipe(User_permissions):

    def get(self, request, id):
        recipe = get_object_or_404(request.user.recipes, id=id)
        serializedrecipe = RecipeSerializer(recipe)
        return Response({"recipe": serializedrecipe.data})

    def put(self, request, id):
        request.data["user_id"] = request.user.id
        recipe = get_object_or_404(request.user.recipes, id=id)
        serializedrecipe = RecipeSerializer(recipe, data=request.data)
        if serializedrecipe.is_valid():
            serializedrecipe.save()
            return Response(serializedrecipe.data)
        return Response(serializedrecipe.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        request.user.recipes.filter(id=id).delete()
        return Response(status=HTTP_204_NO_CONTENT)