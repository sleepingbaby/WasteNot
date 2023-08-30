from rest_framework.serializers import ModelSerializer
from .models import PantryItem

class PantryItemSerializer(ModelSerializer):
    class Meta:
        model = PantryItem
        fields = '__all__'