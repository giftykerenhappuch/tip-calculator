let box1=document.getElementById('first');
let box2=document.getElementById('second');
let total=document.getElementById('tot');
function change(){
    let box3=Number(box1.value);
    let box4=Number(box2.value);
    let total1 = box3 + (box3 * box4 / 100);
    total.textContent=total1
    console.log(total);
}
