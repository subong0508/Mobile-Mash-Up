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
    messages = message
    messages = messages.split('\n')
    with open('seoul_parks.json', encoding='utf-8') as f:
        info = json.load(f)
        for park in info['DATA']:
            if room_num==park['p_idx']:
                parkname = park['p_park']

    return render(request, 'chat/room.html', {'room_num': room_num, 'message': message, 'messages': messages, 'parkname': parkname })

def save_room(request, room_num):
    data = json.loads(request.body)
    chat = ChatRoom(p_idx=room_num, message=data['message'])
    chat.save()
    return HttpResponse()
