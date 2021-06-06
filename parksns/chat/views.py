# chat/views.py
import json
from django.http.response import HttpResponse
from django.shortcuts import render
from .models import ChatRoom

def index(request):
    return render(request, 'chat/index.html')

def room(request, room_num):
    try:
        message = ChatRoom.objects.get(p_idx=room_num).message
    except Exception:
        message = ''
    message += '\n'
    return render(request, 'chat/room.html', {'room_num': room_num, 'message': message })

def save_room(request, room_num):
    data = json.loads(request.body)
    chat = ChatRoom(p_idx=room_num, message=data['message'])
    chat.save()
    return HttpResponse()