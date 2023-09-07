from django.db import models
from django.contrib.auth.models import AbstractUser
from validators import validate_name

# Create your models here.
class User(AbstractUser):
    first_name = models.CharField(validators=[validate_name])
    last_name = models.CharField(validators=[validate_name])
    email = models.EmailField(unique=True)
    img_url = models.CharField()
    profile_picture = models.ImageField(upload_to="profile-pictures/", blank=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [first_name, last_name]