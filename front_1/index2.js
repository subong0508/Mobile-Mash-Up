document.addEventListener('DOMContentLoaded',function() {
    const btselect = document.querySelectorAll("button")
    for (let a=0;a<btselect.length;a++){
        document.querySelectorAll("button")[a].onclick = function (e){
            if(e.target.innerText==='공원 둘러보기'){
                location.href ="Parklistpage.html";
            }
            if(e.target.innerText==='홈으로'){
                location.href ="Homepage.html";
            }
            if(e.target.innerText==='Map'){
                location.href ="Mappage.html";
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
const imglists =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg']
function createlist(listnum) {
    for(i=0;i<listnum;i++) {
        if (i === imglists.length) {
            let a = document.createElement('h2')
            a.setAttribute('id','end')
            a.innerHTML = '공원의 개수를 초과하였습니다.';
            document.getElementById('listup').appendChild(a);
            break;
        } else {
            let pluslist = document.createElement('div');
            let listsrc = 'Mobile-Mash-Up/images/' + imglists[i];
            pluslist.setAttribute('class', 'parkdic');
            pluslist.innerHTML = document.getElementsByClassName('parkdic')[0].innerHTML;
            document.getElementById('listup').appendChild(pluslist);
            document.getElementsByClassName('parkimg')[i].setAttribute('src', listsrc);
        }
    }
    /* 만들어진 요소 나머지 삭제하기
    let b = document.getElementById('listup').childElementCount;
    for(j=listnum;j<b;j++){
        let c =document.getElementsByClassName('parkdic')[j];
        console.log(c);
        c.parentNode.removeChild(c);
    }
    */
}