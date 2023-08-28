from django.db import models
from user_app.models import User

# Create your models here.
class PantryItem(models.Model):
    item_name = models.CharField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='pantryitems')
