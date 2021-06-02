import json

from django.shortcuts import render

from haversine import haversine

# Create your views here.
def index(request):
    return render(request, 'home/index.html')

def location(request):
    long = float(request.GET['long'])
    lat = float(request.GET['lat'])

    parks = []
    with open('seoul_parks.json', encoding='utf-8') as f:
        info = json.load(f)
        for park in info['DATA']:
            if park['longitude'] is not None and park['latitude'] is not None:
                park['long'] = float(park['longitude'])
                park['lat'] = float(park['latitude'])
                park['dist'] = round(haversine((park['lat'], park['long']), (lat, long)), 3)
                if park['dist'] < 1:
                    park['distance'] = str(park['dist'] * 1000) + 'm'
                else:
                    park['distance'] = str(park['dist']) + 'km'
                ##############################################    
                park['p_content'] = str(park['p_list_content']).replace("\n", "")
                park['p_content'] = str(park['p_content']).replace("\"", "")
                park['p_content'] = str(park['p_content']).replace("\'", "")
                park['p_visit_road'] = str(park['visit_road']).replace("\n", "")
                park['p_visit_road'] = str(park['p_visit_road']).replace("\'", "")
                ##############################################
                parks.append(park)
    parks = sorted(parks, key=lambda park: park['dist'])
    return render(request, 'home/parklist.html', {'parks': parks, 'realLong': long, 'realLat': lat })
"""
def map(request):
    long = float(request.GET['long'])
    lat = float(request.GET['lat'])
    return render(request, 'home/mapView.html', {'long': long, 'lat': lat })

def mapAll(request):
    parks = []
    with open('seoul_parks.json', encoding='utf-8') as f:
        info = json.load(f)
        for park in info['DATA']:
            if park['longitude'] is not None and park['latitude'] is not None:
                park['long'] = float(park['longitude'])
                park['lat'] = float(park['latitude'])
                parks.append(park)
    return render(request, 'home/mapAllView.html', {'parks': parks})
"""