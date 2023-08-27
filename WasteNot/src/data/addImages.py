import json
import time
import requests

api_calls = 73 # change to limit calls


def getIngredientsById(id):
    # THIS IS THE API INFORMATION WHEN ACCESSING VIA RAPIDAPI
    # url = f"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/{id}/information"
    # querystring = {"amount": "150", "unit": "grams"}
    # headers = {
    #     'X-RapidAPI-Key': '',
    #     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    # }
    # r = requests.get(url, headers=headers, params=querystring)
    
    payload = {
        "apiKey": "",  # add apiKey Here
        "amount": 150,
        "unit": "grams"
    }
    endpoint = f"https://api.spoonacular.com/food/ingredients/{id}/information"
    r = requests.get(endpoint, params=payload) #ORIGINAL FOR SPOONACULAR API CALLS

    if r.status_code == 200:
        print("Success")
        results = r.json()
        image = results.get("image")
        print(image)
        return (image)
    elif r.status_code == 402:
        print("Out of Tokens")
        return ("")
    else:
        print(f"Something went wrong. Status code {r.status_code}")
        return ("")


with open('PantryItems.json', 'r') as file:
    data = json.load(file)

for item in data['data'].values():
    if api_calls != 0:
        if not item['image']:
            print(f"{item['name']} with id of {item['id']} has no image")
            img_url = getIngredientsById(item['id'])
            print(img_url)
            if img_url:
                item['image'] = str(img_url)
                time.sleep(2)
            api_calls -= 1

    else:
        break

with open('PantryItems.json', 'w') as file:
    json.dump(data, file, indent=4)
