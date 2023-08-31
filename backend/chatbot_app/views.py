import random
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from dotenv import dotenv_values
from django.http import JsonResponse


env = dotenv_values(".env")

class SpoonacularBot:
    def __init__(self):
        self.context_id = random.randint(1, 100000)
        self.conversations = {}

    def react(self, query):
        url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/converse"
        headers = {
            'X-RapidAPI-Key': env.get("SPOON_API_KEY_RAPID"),
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        }
        quearystring = {"contextID" : self.context_id, "text": query}
        
        print("making API call", quearystring)
        res = requests.get(url, headers=headers, params=quearystring)
        data = res.json()
        # data = {"answerText": "No"}
        content = data.get("answerText", "")

        if "media" in data:
            media_content = []
            for i, ob in enumerate(data["media"]):
                media_content.append({
                    "image": ob["image"],
                    "title": ob["title"],
                    "link": ob["link"],
                    "more_like_this": f"more like number {i + 1}"
                })
            self.conversations[self.context_id] = media_content

        return data

    def get_capabilities(self):
        return [
            "Ask for recipes like 'chicken recipes' or 'spaghetti with shrimp'",
            "Ask for nutrient contents like 'vitamin a in 2 carrots' or 'calories is 1 cup of butter'",
            "Convert something with '2 cups of butter in grams'",
            "If you want more results, just say 'more'",
            "For more similar results say 'more like the first/second/third...'",
            "Let spoonacular tell you a joke, just say 'tell me a joke'.",
            "Want to learn some food trivia, just say 'food trivia'.",
        ]

    # def get_suggest_url(self):
    #     return f"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/converse/suggest?mashape-key={self.api_key}&query="


spoonacular_bot = SpoonacularBot()


class Chat(APIView):
    def post(self, request):
        query = request.data.get('text')
        print(query)
        if query:
            response = spoonacular_bot.react(query)
            return JsonResponse({'response': response})


class Capabilities(APIView):
    def get(self, request):
        return JsonResponse({'capabilities': spoonacular_bot.get_capabilities()})



## tested with "Blueberry Doughnut Recipes", "more", "more like 1" calls