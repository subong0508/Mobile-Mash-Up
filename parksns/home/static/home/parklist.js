document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('numbers').addEventListener('change',()=>makelist(parkobject));
    const btselect = document.querySelectorAll("button")
    for (let a = 0; a < btselect.length; a++) {
        document.querySelectorAll("button")[a].onclick = function (e) {
            if (e.target.innerText === '공원 둘러보기') {
                location.href = "Parklistpage.html";
            }
            if (e.target.innerText === '홈으로') {
                console.log(1);
                location.href = "/";
            }
            if (e.target.innerText === 'Map') {
                location.href = "mapAll";
            }
        }
    }
});

function makelistchild(parkobject,x){
    let parkList = document.getElementById("parkList");
    let list, div, name, img, dist, chat, map;
    list = document.createElement("ul");
    div = document.createElement("div");
    div.style.border = "1px solid black";
    div.setAttribute('class','parkdic');
    names = document.createElement("li");
    names.setAttribute('class','in2li');
    names.innerHTML = "공원 이름:" + parkobject.parkname[x];
    list.appendChild(names);

    img = document.createElement("img");
    img.src = parkobject.parkimgsrc[x];
    img.alt = "공원 사진";
    img.setAttribute('class','parkimg');
    divimg = document.createElement('div');
    divimg.setAttribute('class','imgar')
    divimg.appendChild(img);
    div.appendChild(divimg);

    dist = document.createElement("li");
    dist.innerHTML = "거리:" + parkobject.parkdistance[x];
    dist.setAttribute('class','in2li');
    list.appendChild(dist);

    /*list.innerHTML += "<li>";
    chat = document.createElement("a")
    chat.href = "";
    chat.innerHTML = "채팅방 입장";
    list.appendChild(chat);
    list.innerHTML += "</li>";

    list.innerHTML += "<li>";
    map = document.createElement("a");
    map.href = "";
    map.innerHTML = "지도";
    list.appendChild(map);
    list.innerHTML += "</li>";*/

    divlist = document.createElement("div");
    divlist.setAttribute('class','explain');
    divlist.appendChild(list);
    div.appendChild(divlist);

    btnschild = document.createElement('div');
    btnschild.setAttribute('class','btnschild');

    form1 = document.createElement('form');
    form1.setAttribute('action', 'map');
    form1.setAttribute('method', 'get');

    input1 = document.createElement('input');
    input1.setAttribute('type', 'hidden');
    input1.setAttribute('name', 'long');
    input1.setAttribute('id', 'long');
    input1.setAttribute('value', parkobject.parklongitude[x]);

    input2 = document.createElement('input');
    input2.setAttribute('type', 'hidden');
    input2.setAttribute('name', 'lat');
    input2.setAttribute('id', 'lat');
    input2.setAttribute('value', parkobject.parklatitude[x]);

    input3 = document.createElement('input');
    input3.setAttribute('type', 'hidden');
    input3.setAttribute('name', 'p_content');
    input3.setAttribute('id', 'p_content');
    input3.setAttribute('value', parkobject.parkcontent[x]);

    
    input4 = document.createElement('input');
    input4.setAttribute('type', 'hidden');
    input4.setAttribute('name', 'p_visit_road');
    input4.setAttribute('id', 'p_visit_road');
    input4.setAttribute('value', parkobject.parkvisitroad[x]);
    

    btn1 = document.createElement('button');
    btn1.innerHTML='Map';
    btn1.setAttribute('class','bt3');
    form1.appendChild(input1);
    form1.appendChild(input2);
    form1.appendChild(input3);
    form1.appendChild(input4);
    form1.appendChild(btn1);
    btnschild.appendChild(form1);

    btn2 = document.createElement('button')
    btn2.setAttribute('class','bt3');
    btn2.innerHTML='채팅';

    btnschild.appendChild(btn2);
    div.appendChild(btnschild);
    parkList.appendChild(div);
}
function makelist(parkobject){
    let listnum;
    if(document.getElementById('numbers').value==='직접입력'){
        document.getElementById('inputnb').style.display='inline-block';
        document.getElementById('change').style.display='inline-block';
        document.getElementById('change').onclick=function (){
            const reg = /^[0-9]/g;
            if (reg.test(document.getElementById('inputnb').value)&&document.getElementById('inputnb').value<=40){
                listnum = document.getElementById('inputnb').value;
                parseInt(listnum);
                document.getElementById('parkList').innerHTML="";
                for (let i=0;i<listnum;i++){
                    makelistchild(parkobject,i);
                }
            }
            else {
                alert('40이하의 자연수로 입력해주세요')
            }
        }
    }
    else {
        document.getElementById('inputnb').style.display='none';
        document.getElementById('change').style.display='none';
        listnum = document.getElementById('numbers').value;
        parseInt(listnum);
        document.getElementById('parkList').innerHTML="";
        for (let i=0;i<listnum;i++){
                makelistchild(parkobject,i);
            }
    }
}