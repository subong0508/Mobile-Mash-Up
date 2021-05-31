// // 맵 생성
// var lat = "{{lat}}";
// var long = "{{long}}";
// var container = document.getElementById('map');
// var options = {
//     center: new kakao.maps.LatLng(lat, long),
//     level: 3
// };

// var map = new kakao.maps.Map(container, options);
    
// var markerPosition = new kakao.maps.LatLng(lat, long);

// // 마커 생성(공원 위치)
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// marker.setMap(map);

// // 마커 생성(나의 위치)
// var realLong = "{{realLong}}";
// var realLat = "{{realLat}}";
// var myMarkerPosition = new kakao.maps.LatLng(realLat, realLong);
// var myMarker = new kakao.maps.Marker({
//     position: myMarkerPosition
// });
// myMarker.setMap(map);

// // 선을 구성하는 좌표 배열
// var linePath = [markerPosition,	myMarkerPosition];
// console.log(linePath);

// // 지도에 표시할 선을 생성합니다
// var polyline = new kakao.maps.Polyline({
//     path: linePath,
//     strokeWeight: 5,
//     strokeColor: '#DB4040',
//     strokeOpacity: 1,
//     strokeStyle: 'solid'
// });

// polyline.setMap(map);

// var realDistance = Math.round(polyline.getLength());

// ////////////////////////////////////////////////
// // 커스텀 오버레이에 표시할 내용입니다     
// // HTML 문자열 또는 Dom Element 입니다
// var parkTitle = "{{p_park}}";
// var con = "{{p_content}}";
// var vr = "{{p_visit_road}}";
// var content = 
//             '<div class="overlaybox">' + 
//             '	 <div class="title">' +
//                     parkTitle + 
//             '		<div class="close" onclick="closeOverlay()" title="닫기">X</div>' +
//             '	 </div>' +	
//             '    <div class="boxtitle">공원 설명</div>' +
//             '    <div class="first">' +
//                     con + '<br>' +
//             '	 </div>' +
//             '    <div class="boxtitle">찾아오는 길</div>' +
//             '    <div class="first">' +
//                     vr + '<br>' +
//             '	 </div>' +
//         '</div>';

// // 커스텀 오버레이가 표시될 위치입니다 
// var position = new kakao.maps.LatLng(lat, long);  

// // 커스텀 오버레이를 생성합니다
// var customOverlay = new kakao.maps.CustomOverlay({
//     position: position,
//     content: content,
//     xAnchor: 0.3,
//     yAnchor: 0.91
// });

// // 클릭하면 커스텀 오버레이가 표시됩니다
// kakao.maps.event.addListener(marker, 'click', function(){
//     customOverlay.setMap(map);
// });

// function closeOverlay() {
//     customOverlay.setMap(null);     
// }