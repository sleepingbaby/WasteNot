from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from dotenv import dotenv_values


env = dotenv_values(".env")

base_url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
headers = {
    'X-RapidAPI-Key': env.get("SPOON_API_KEY_RAPID"),
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    }

# Create your views here.
class Spoon_Docs(APIView):
    def get(self, request):
        message = "Lost??"
        return Response(message)

class Recipe_By_ID(APIView):
    def get(self, request, recipe_id):
        url = f"{base_url}/recipes/{recipe_id}/information"
        querystring = {"includeNutrition": False}
        res = requests.get(url, headers=headers, params=querystring)
        responseJSON = res.json()
        return Response(responseJSON)
    
class Recipe_By_Ingredients(APIView):
    def get(self, request):
        # expects a list of ingredient objects to convert to a string of ingredients
        data = request.data
        ingredients = ""
        for item in data:
            ingredients += f',{item["label"]}'
        ingredients = ingredients[1::]
        
        url = f"{base_url}/recipes/findByIngredients"
        querystring = {
            "ingredients": ingredients,
            "number": 10,
            "limitLicense": True,
            "ranking": 1,
            "ignorePantry": True
        }
        res = requests.get(url, headers=headers, params=querystring)
        responseJSON = res.json()
        return Response(responseJSON)

class Recipe_Random(APIView):
    def get(self, request):
        url = f"{base_url}/recipes/random"
        querystring = {"limitLicense": True, "number": 5}
        res = requests.get(url, headers=headers, params=querystring)
        responseJSON = res.json()
        return Response(responseJSON)


class Ingredient_By_ID(APIView):
    def get(self, request, ingredient_id):
        url = f"{base_url}/food/ingredients/{ingredient_id}/information"
        querystring = {"amount": "150", "unit": "grams"}
        res = requests.get(url, headers=headers, params=querystring)
        responseJSON = res.json()
        return Response(responseJSON)

