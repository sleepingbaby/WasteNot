from django.urls import path
from .views import Spoon_Docs, Recipe_By_ID, Ingredient_By_ID, Chatbot

# localhost:8000/api/vi/spoon/
urlpatterns = [
    path("", Spoon_Docs.as_view(), name="spoon_docs"),
    path("recipe/<int:recipe_id>/", Recipe_By_ID.as_view(), name="recipe_by_id"),
    path("ingredient/<int:ingredient_id>/", Ingredient_By_ID.as_view(), name="ingredient_by_id"),
    path("chat/", Chatbot.as_view(), name='chatbot')
]