import json

jsonArr = []

with open('PantryItems.json', 'r') as file:
    data = json.load(file)

for item in data['data'].values():
    new_obj = {}
    new_obj['label'] = item['name']
    new_obj['id'] = item['id']
    new_obj['image'] = item['image']

    jsonArr.append(new_obj)

with open('PantryItemsTestNoIndent.json', 'w') as file:
    json.dump(jsonArr, file)
