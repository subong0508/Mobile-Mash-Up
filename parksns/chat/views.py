# chat/views.py
from django.shortcuts import render

def index(request):
    return render(request, 'chat/index.html')

def room(request, room_num):
    return render(request, 'chat/room.html', {'room_num': room_num })