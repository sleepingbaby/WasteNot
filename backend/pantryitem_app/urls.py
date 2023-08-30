from django.urls import path

# from .models import PantryItem
from .views import All_pantry_items, A_pantry_item

urlpatterns = [
    path ('', All_pantry_items.as_view(), name='all_pantry_items'),
    path ('<int:id>/', A_pantry_item.as_view(), name='a_pantry_item') 
]