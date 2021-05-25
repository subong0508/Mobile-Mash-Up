from django.urls import path

from . import views

urlpatterns = [
    path('location', views.location),
    path('map', views.map),
    path('mapAll', views.mapAll)
]
