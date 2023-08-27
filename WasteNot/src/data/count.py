import json

count = 0

with open('PantryItems.json', 'r') as file:
    data = json.load(file)

# counts remaining empty image fields
for item in data['data'].values():
    if not item['image']:
        count += 1

print(count)