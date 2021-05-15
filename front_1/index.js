document.addEventListener('DOMContentLoaded',function() {
    const btselect = document.querySelectorAll("button")
    for (let a=0;a<btselect.length;a++){
        document.querySelectorAll("button")[a].onclick = function (e){
            if(e.target.innerText==='공원 둘러보기'){
                location.href ="index2.html";
            }
            if(e.target.innerText==='홈으로'){
                location.href ="index.html";
            }
            if(e.target.innerText==='Map'){
                location.href ="index3.html";
            }
    }
    }
    document.getElementById('numbers').addEventListener('change',function (){
        let listnum;
        if(document.getElementById('numbers').value==='직접입력'){
            document.getElementById('inputnb').style.display='inline-block';
            document.getElementById('change').style.display='inline-block';
            document.getElementById('change').onclick=function (){
                const reg = /^[0-9]/g;
                if (reg.test(document.getElementById('inputnb').value)&&document.getElementById('inputnb').value<=40){
                    listnum = document.getElementById('inputnb').value;
                    createlist(listnum);
                }
                else {
                    alert('40이하의 자연수로 입력해주세요')
                }
                parseInt(listnum);
            }
        }
        else {
            document.getElementById('inputnb').style.display='none';
            document.getElementById('change').style.display='none';
            listnum = document.getElementById('numbers').value;
            parseInt(listnum);
            createlist(listnum);
        }
    })
})
function createlist(listnum) {
    let parklists = document.createElement('div');
    document.getElementById('listup').innerHTML="";
    let parklistsHT = "";
    for (let i = 0; i < listnum; i++) {
        let j=i+1;
        parklistsHT += '<div id="listup" class="set">\n' +
            '        <div class="parkdic">\n' +
            '            <div class="imgar">\n' +
            '                <img class="parkimg" src="';
        parklistsHT += j;
        parklistsHT += '.jpg" alt="';
        parklistsHT += j;
        parklistsHT += '"/>\n' +
            '            </div>\n' +
            '            <div class="explain">\n' +
            '                <ul>\n' +
            '                    <li class="in2li">00 공원</li>\n' +
            '                    <li class="in2li">나외의 거리:</li>\n' +
            '                    <li class="in2li">공원 크기:</li>\n' +
            '                    <li class="in2li">채팅방 인원:</li>\n' +
            '                </ul>\n' +
            '            </div>\n' +
            '                <div class="btnschild">\n' +
            '                <button class="bt3">Map</button>\n' +
            '                <button class="bt3">채팅</button>\n' +
            '                </div>\n' +
            '        </div>\n' +
            '    </div>';
    }
    parklists.innerHTML = parklistsHT;
    document.getElementById('listup').appendChild(parklists);
}