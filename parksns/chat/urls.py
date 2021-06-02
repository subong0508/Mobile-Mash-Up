# chat/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:room_num>/', views.room, name='room'),
    path('save/<int:room_num>/', views.save_room, name='save_room')
]