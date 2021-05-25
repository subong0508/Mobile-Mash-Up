// let parkobject={};
// let parkname=[];
// let parklongitude=[];
// let parklatitude=[];

// function makeList() {
//     {% for park in parks %}
//         parkname.push("{{ park.p_park }}");
//         parklongitude.push("{{ park.long }}");
//         parklatitude.push("{{ park.lat }}");
//     {% endfor %}
//     parkobject.parkname = parkname;
//     parkobject.parklongitude = parklongitude;
//     parkobject.parklatitude = parklatitude;

//     var positions = [];
//     for (var i = 0; i < 131; i++) {
//         var obj = { content: '<div>' + parkobject.parkname[i] + '</div>',
//         latlng: new kakao.maps.LatLng(parkobject.parklatitude[i], parkobject.parklongitude[i]) }
//         positions.push(obj);
//     }

//     var check = 0;
//     positions.forEach(function() {
//         var marker = new kakao.maps.Marker({
//             map: map, 
//             position: positions[check].latlng 
//         });

//         var infowindow = new kakao.maps.InfoWindow({
//             content: positions[check].content 
//         });

//         kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
//         kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

//         check++;
//     })
//     console.log(positions);
// //     for (var i = 0; i < positions.length; i ++) {
// //         var marker = new kakao.maps.Marker({
// //             map: map, 
// //             position: positions[i].latlng 
// //         });

// //         var infowindow = new kakao.maps.InfoWindow({
// //             content: positions[i].content 
// //         });
    
// //     kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
// //     kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
// //     }
// // }
// document.addEventListener("DOMContentLoaded", makeList);

// // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
// function makeOverListener(map, marker, infowindow) {
//     return function() {
//         infowindow.open(map, marker);
//     };
// }

// // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
// function makeOutListener(infowindow) {
//     return function() {
//         infowindow.close();
//     };
// }