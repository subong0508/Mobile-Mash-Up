document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('numbers').addEventListener('change',()=>makelist(parkobject));
    const btselect = document.querySelectorAll("button");
    for (let a = 0; a < btselect.length; a++) {
        document.querySelectorAll("button")[a].onclick = function (e) {
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
    list = document.createElement("div");
    div = document.createElement("div");
    div.setAttribute('class','parkdic');
    names = document.createElement("div");
    names.setAttribute('class','in2li');
    names.innerHTML = parkobject.parkname[x];
    list.appendChild(names);

    img = document.createElement("img");
    img.src = parkobject.parkimgsrc[x];
    img.alt = "공원 사진";
    img.setAttribute('class','parkimg');
    divimg = document.createElement('div');
    divimg.setAttribute('class','imgar');
    divimg.appendChild(img);
    div.appendChild(divimg);

    dist = document.createElement("div");
    dist.innerHTML = parkobject.parkdistance[x];
    dist.setAttribute('class','distText');
    list.appendChild(dist);

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

    input5 = document.createElement('input');
    input5.setAttribute('type', 'hidden');
    input5.setAttribute('name', 'p_park');
    input5.setAttribute('id', 'p_park');
    input5.setAttribute('value', parkobject.parkname[x]);

    input6 = document.createElement('input');
    input6.setAttribute('type', 'hidden');
    input6.setAttribute('name', 'realLong');
    input6.setAttribute('id', 'realLong');
    input6.setAttribute('value', realPosition[0]);

    input7 = document.createElement('input');
    input7.setAttribute('type', 'hidden');
    input7.setAttribute('name', 'realLat');
    input7.setAttribute('id', 'realLat');
    input7.setAttribute('value', realPosition[1]);

    input8 = document.createElement('input');
    input8.setAttribute('type', 'hidden');
    input8.setAttribute('name', 'distance');
    input8.setAttribute('id', 'distance');
    input8.setAttribute('value', parkobject.parkdistance[x]);

    input9 = document.createElement('input');
    input9.setAttribute('type', 'hidden');
    input9.setAttribute('name', 'parktel');
    input9.setAttribute('id', 'parktel');
    input9.setAttribute('value', parkobject.parktel[x]);

    input10 = document.createElement('input');
    input10.setAttribute('type', 'hidden');
    input10.setAttribute('name', 'parkurl');
    input10.setAttribute('id', 'parkurl');
    input10.setAttribute('value', parkobject.parkurl[x]);
    
    input11 = document.createElement('input');
    input11.setAttribute('type', 'hidden');
    input11.setAttribute('name', 'parkadd');
    input11.setAttribute('id', 'parkadd');
    input11.setAttribute('value', parkobject.parkadd[x]);

    btn1 = document.createElement('button');
    btn1.innerHTML='Map';
    btn1.setAttribute('class','bt3');

    form1.appendChild(input1);
    form1.appendChild(input2);
    form1.appendChild(input3);
    form1.appendChild(input4);
    form1.appendChild(input5);
    form1.appendChild(input6);
    form1.appendChild(input7);
    form1.appendChild(input8);
    form1.appendChild(input9);
    form1.appendChild(input10);
    form1.appendChild(input11);
    form1.appendChild(btn1);
    btnschild.appendChild(form1);

    link = document.createElement('a');
    link.setAttribute('href', '/chat/' + parkobject.parkIdx[x] + '/');

    btn2 = document.createElement('button');
    btn2.setAttribute('class', 'bt3');
    btn2.innerHTML= '채팅';
    btn2.parkIdx = parkobject.parkIdx[x];

    link.appendChild(btn2);
    btnschild.appendChild(link);

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
                alert('40이하의 자연수로 입력해주세요');
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
