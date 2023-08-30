from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests, pprint
from requests_oauthlib import OAuth1 # <= Is this needed??
from dotenv import dotenv_values

env = dotenv_values(".env")
apiKey = env.get("SPOON_API_KEY")
pp = pprint.PrettyPrinter(indent=2, depth=2)

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
        data = request.data
        ingredients = ""
        for item in data:
            ingredients += f',{item["label"]}'
        ingredients = ingredients[1::]
        
        payload = {
            "apiKey": apiKey,
            "ingredients": ingredients,
            "number": 10,
            "limitLicense": True,
            "ranking": 1,
            "ignorePantry": True
        }

        # GET https://api.spoonacular.com/recipes/findByIngredients
        endpoint = "https://api.spoonacular.com/recipes/findByIngredients"
        response = requests.get(endpoint, params=payload)
        print(response.status_code)
        responseJSON = response.json()
        return Response(responseJSON)
    
class Recipe_Random(APIView):
    def get(self, request):
        payload = {
            "apiKey": apiKey,
            "limitLicense": True,
            "number": 5,
        }

        endpoint = "https://api.spoonacular.com/recipes/random"
        response = requests.get(endpoint, params=payload)
        responseJSON = response.json()
        # pp.pprint(responseJSON)
        return Response(responseJSON)


class Ingredient_By_ID(APIView):
    def get(self, request, ingredient_id):
        # THIS IS THE API INFORMATION WHEN ACCESSING VIA RAPIDAPI
        # url = f"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/{id}/information"
        # querystring = {"amount": "150", "unit": "grams"}
        # headers = {
        #     'X-RapidAPI-Key': '',
        #     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        # }
        # r = requests.get(url, headers=headers, params=querystring)
        
        payload = {
            "apiKey": apiKey,  # add apiKey Here
            "amount": 150,
            "unit": "grams"
        }
        
        endpoint = f"https://api.spoonacular.com/food/ingredients/{ingredient_id}/information"
        response = requests.get(endpoint, params=payload) #ORIGINAL FOR SPOONACULAR API CALLS
        responseJSON = response.json()
        # pp.pprint(responseJSON)
        return Response(responseJSON)


class Chatbot(APIView):
    pass


