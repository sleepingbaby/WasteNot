from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import Recipe
from user_app.models import User

class RecipeSerializer(ModelSerializer):
    user_id = PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'summary', 'instructions', 'extendedIngredients', 'prepared_counter', 'is_favorite', 'notes', 'image', 'user_id']
