from django.urls import path
from .views import GPT3RecipeView

urlpatterns = [
    path("", GPT3RecipeView.as_view(), name="chatGPT_query"),
]