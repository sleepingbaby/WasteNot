from django.urls import path
from .views import Capabilities, Chat

# localhost:8000/api/chatbot/
urlpatterns = [
    path('chat/', Chat.as_view(), name='chat'),
    path('capabilities/', Capabilities.as_view(), name='capabilities'),
]