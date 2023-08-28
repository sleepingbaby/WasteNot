from django.db import models
from user_app.models import User

# Create your models here.
class Recipe(models.Model):
    title = models.CharField()
    description = models.TextField(null=True, blank=True)
    instructions = models.TextField(null=True, blank=True)
    ingredients = models.TextField(null=True, blank=True)
    prepared_counter = models.BigIntegerField(default=0)
    is_favorite = models.BooleanField(default=False)
    notes = models.CharField(null=True, blank=True)
    recipe_image = models.CharField(null=True, blank=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipes')

