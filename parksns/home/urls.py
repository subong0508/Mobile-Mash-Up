from django.urls import path
from home import views as v1
from map import views as v2
from . import views

urlpatterns = [
    path('location', views.location),
    path('map', v2.map),
    path('mapAll', v2.mapAll)
]
