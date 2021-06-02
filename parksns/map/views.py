import json
from django.shortcuts import render
from haversine import haversine

def map(request):
    print(request.GET)
    long = float(request.GET['long'])
    lat = float(request.GET['lat'])
    realLong = float(request.GET['realLong'])
    realLat = float(request.GET['realLat'])
    parktel = request.GET.get('parktel')
    parkurl = request.GET.get('parkurl')
    parkadd = request.GET.get('parkadd')
    p_distance = str(request.GET.get('distance'))
    p_park = request.GET.get('p_park')
    p_content = request.GET.get('p_content')
    p_visit_road = str(request.GET.get('p_visit_road'))
    return render(request, 'map/mapView.html', {'long': long, 'lat': lat, 'p_content' : p_content, 'p_visit_road' : p_visit_road, 'p_park' : p_park, 'realLong': realLong, 'realLat': realLat, 'p_distance': p_distance, 'parktel': parktel, 'parkurl': parkurl, 'parkadd': parkadd})

def mapAll(request):
    parks = []
    with open('seoul_parks.json', encoding='utf-8') as f:
        info = json.load(f)
        for park in info['DATA']:
            if park['longitude'] is not None and park['latitude'] is not None:
                park['long'] = float(park['longitude'])
                park['lat'] = float(park['latitude'])
                parks.append(park)
    return render(request, 'map/mapAllView.html', {'parks': parks})

