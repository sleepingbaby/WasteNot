from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model

class UserSerializer(ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ["id", "first_name", "last_name", "email", "img_url", "profile_picture"]