var newname= document.getElementById('name');
var newrating= document.getElementById('rating');
var btn = document.querySelector('button');
var table=document.getElementById('display');
var row=0;
btn.addEventListener('click',()=>{
    let newrow=table.insertRow(row);
    let c1=newrow.insertCell(0);
    let c2=newrow.insertCell(1);
    c1.innerText=newname.value;
    c2.innerText=newrating.value;
    row++;
    newname.value='';
    newrating.value='';
})