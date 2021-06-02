
document.addEventListener(makelistchild,function() {
    const btselect = document.querySelectorAll("button")
    for (let a = 0; a < btselect.length; a++) {
        document.querySelectorAll("button")[a].onclick = function (e) {
            if (e.target.innerText === '뒤로 가기') {
                location.href = "location_";
            }
        }
    }
});

function makelistchild(myLongLat){
    let backbutton = document.getElementById("backbutton");

    form1 = document.createElement('form');
    form1.setAttribute('action', 'location');
    form1.setAttribute('method', 'get');

    input1 = document.createElement('input');
    input1.setAttribute('type', 'hidden');
    input1.setAttribute('name', 'long');
    input1.setAttribute('id', 'long');
    input1.setAttribute('value', myLongLat["realLong"] );

    input2 = document.createElement('input');
    input2.setAttribute('type', 'hidden');
    input2.setAttribute('name', 'lat');
    input2.setAttribute('id', 'lat');
    input2.setAttribute('value', myLongLat["realLat"] );

    btn1 = document.createElement('button');
    btn1.innerText='뒤로 가기';
    btn1.setAttribute('class','bt1');

    form1.appendChild(input1);
    form1.appendChild(input2);
    form1.appendChild(btn1);
    backbutton.appendChild(form1);

}