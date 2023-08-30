# WasteNot Back-End

## Spoon_API
I'm still working on building them out and will refractor the views page soon. I know it is a mess. I am also looking at a way to generate docs in Postman that looks promising. 

Here are the calls I have built and tested with my current key. I applied for a student pass and will convert them all for the rapid key once I get approved, but for right now they work with a 150 request limit per day. Keep in mind, large calls like random and chat conversations will use up more requests then single recipe calls but feel free to test out the front end applications. The request limits reset at 8pm eastern. 

```
base url = http://127.0.0.1:8000/api/
``` 

### Recipes

* Recipe by ID:
```
{{base_url}}spoon/recipe/{id}/ 
```
* Recipe Search by Ingredients
```
{{base_url}}spoon/recipe/ingredients/
```
``` 
body = {{ingredient_obj}, {ingredient_obj}, {ingredient_obj}}
```
* Random Recipes (currently set to 5)
```
{{base_url}}spoon/recipe/random/
```

### Ingredients
* Ingredient by ID
```
{{base_url}}spoon/ingredient/{id}/
```