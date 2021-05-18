document.addEventListener("DOMContentLoaded", getLocation);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
}
  
function showPosition(position) {
    document.getElementById("long").value = position.coords.longitude;
    document.getElementById("lat").value = position.coords.latitude;
    document.getElementById("init").innerHTML = "공원 둘러보기";
}