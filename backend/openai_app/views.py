from rest_framework.views import APIView
from rest_framework.response import Response
import json
import requests
from dotenv import dotenv_values
from django.http import JsonResponse

env = dotenv_values(".env")
# Create your views here.
base_url = "https://api.openai.com/v1/chat/completions"
headers = {
    'Authorization': f"Bearer {env.get('OPEN_AI_KEY')}"
    }


class GPT3RecipeView(APIView):
    def post(self, request):
        try:
            data = request.data

            if "model" in data and "messages" in data:

                response = requests.post(base_url, json=data, headers=headers)

                if response.status_code == 200:
                    response_json = response.json()

                    content = response_json['choices'][0]['message']['content']
                    parsed_content = json.loads(content)
                    return Response(parsed_content)
                else:
                    return Response({"error": "Failed to get a response from OpenAI API. "}, status = response.status_code)
            else:
                return Response({"error": "Invalid request data structure. "}, status=400)
        except Exception as e:
            return Response({"error": str(e)}, status=500)
        

def search_recipe_image(request, recipe_name):
    if request.method == 'GET':
        print(recipe_name)


        # Make a request to the Google Custom Search API for a general web search
        response = requests.get(
            f'https://www.googleapis.com/customsearch/v1?key={env.get("GOOGLE_SEARCH_API_KEY")}&cx={env.get("GOOGLE_SEARCH_CX_KEY")}&q={recipe_name}&searchType=image'
        )

        data = response.json()

        print(data);
        # Extract the first image URL from the search results
        first_image_link = data.get('items', [])[0].get('link', '')

        return JsonResponse({'image_url': first_image_link})

    return JsonResponse({'error': 'Invalid request method'}, status=400)
