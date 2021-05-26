import json
from django.shortcuts import render
from haversine import haversine

def map(request):
    long = float(request.GET['long'])
    lat = float(request.GET['lat'])
    return render(request, 'map/mapView.html', {'long': long, 'lat': lat })

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
