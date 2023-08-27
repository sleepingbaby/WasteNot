import json
import time
import requests

api_calls = 1  # change to limit calls


def getIngredientsById(id):
    payload = {
        "apiKey": "361d1dea26cc492882723a7a431d53c2",  # add apiKey Here
        "amount": 150,
        "unit": "grams"
    }

    endpoint = f"https://api.spoonacular.com/food/ingredients/{id}/information"

    r = requests.get(endpoint, params=payload)

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
