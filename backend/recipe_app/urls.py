from django.urls import path
from .views import A_recipe, All_recipes

urlpatterns = [
    path('', All_recipes.as_view(), name='all_recipes'),
    path('<int:id>/', A_recipe.as_view(), name='a_recipe')
]