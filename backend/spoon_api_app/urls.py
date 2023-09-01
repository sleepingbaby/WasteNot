from django.urls import path
from .views import Spoon_Docs, Recipe_By_ID, Recipe_By_Ingredients, Recipe_Random, Ingredient_By_ID

# localhost:8000/api/spoon/
urlpatterns = [
    path("", Spoon_Docs.as_view(), name="spoon_docs"),
    path("recipe/<int:recipe_id>/", Recipe_By_ID.as_view(), name="recipe_by_id"),
    path("recipe/ingredients/", Recipe_By_Ingredients.as_view(), name="recipe_by_ingredients"),
    path("recipe/random/", Recipe_Random.as_view(), name="recipe_random"),
    path("ingredient/<int:ingredient_id>/", Ingredient_By_ID.as_view(), name="ingredient_by_id")
]