from django.urls import path
from .views import GPT3RecipeView, search_recipe_image

urlpatterns = [
    path("", GPT3RecipeView.as_view(), name="chatGPT_query"),
    path("image/<str:recipe_name>/", search_recipe_image, name="search_image")
]