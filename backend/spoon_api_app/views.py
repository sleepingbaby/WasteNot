from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests, pprint
from requests_oauthlib import OAuth1 # <= Is this needed??
from dotenv import dotenv_values
import random

env = dotenv_values(".env")
apiKey = env.get("SPOON_API_KEY")
base_url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/"
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
        payload = {
            "apiKey": apiKey,
            "includeNutrition": False
        }
        endpoint = f"https://api.spoonacular.com/recipes/{recipe_id}/information"
        response = requests.get(endpoint, params=payload)
        responseJSON = response.json()
        # pp.pprint(responseJSON)
        return Response(responseJSON)
    
class Recipe_By_Ingredients(APIView):
    def get(self, request):
        # expects a list of ingredient objects to convert to a string of ingredients
        data = request.data
        ingredients = ""
        for item in data:
            ingredients += f',{item["label"]}'
        ingredients = ingredients[1::]
        
        url = f"{base_url}recipes/findByIngredients"
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
        url = f"{base_url}recipes/random"
        querystring = {"limitLicense": True, "number": 5}
        res = requests.get(url, headers=headers, params=querystring)
        responseJSON = res.json()
        return Response(responseJSON)


class Ingredient_By_ID(APIView):
    def get(self, request, ingredient_id):
        url = f"{base_url}food/ingredients/{ingredient_id}/information"
        querystring = {"amount": "150", "unit": "grams"}
        res = requests.get(url, headers=headers, params=querystring)
        responseJSON = res.json()
        return Response(responseJSON)


class Chatbot(APIView):
    
    def create_context_id(self):
        return random.randint(1,100)
        
    def get(self, request, contextId=None):

            url = f"{base_url}food/converse"
            text = request.data.get("text", "")
            if not contextId:
                contextId = self.create_context_id()

            querystring = {"text": text, "contextId": contextId}
            res  = requests.get(url, headers=headers, params=querystring)
            # print(f"contextId: {contextId}")
            
            responseJSON = res.json()
        
            return Response(responseJSON)