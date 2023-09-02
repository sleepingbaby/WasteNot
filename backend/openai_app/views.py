from rest_framework.views import APIView
from rest_framework.response import Response
import json
import requests
from dotenv import dotenv_values

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
                return Response({"error": "Invvalid request data structure. "}, status=400)
        except Exception as e:
            return Response({"error": str(e)}, status=500)
        