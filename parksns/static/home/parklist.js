document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('numbers').addEventListener('change',()=>makelist(parkobject));
    const btselect = document.querySelectorAll("button")
    for (let a = 0; a < btselect.length; a++) {
        document.querySelectorAll("button")[a].onclick = function (e) {
            if (e.target.innerText === '홈으로') {
                console.log(1);
                location.href = "/";
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
    names.innerHTML = "공원 이름: " + parkobject.parkname[x];
    list.appendChild(names);

    img = document.createElement("img");
    img.src = parkobject.parkimgsrc[x];
    img.alt = "공원 사진";
    img.setAttribute('class','parkimg');
    divimg = document.createElement('div');
    divimg.setAttribute('class','imgar');
    divimg.appendChild(img);
    div.appendChild(divimg);

    dist = document.createElement("li");
    dist.innerHTML = "거리: " + parkobject.parkdistance[x];
    dist.setAttribute('class','in2li');
    list.appendChild(dist);

    divlist = document.createElement("div");
    divlist.setAttribute('class','explain');
    divlist.appendChild(list);
    div.appendChild(divlist);

    btnschild = document.createElement('div');
    btnschild.setAttribute('class','btnschild');
    btn1 = document.createElement('button');
    btn1.innerHTML='Map';
    btn1.setAttribute('class','bt3');

    link = document.createElement('a');
    link.setAttribute('href', '/chat/' + parkobject.parkIdx[x] + '/');

    btn2 = document.createElement('button');
    btn2.setAttribute('class', 'chatButton');
    btn2.innerHTML='채팅';

    link.appendChild(btn2);

    btnschild.appendChild(btn1);
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
