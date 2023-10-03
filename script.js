let array=["hi","welcome"]
let b=document.getElementById("result");

function display(){
    var c=array.toString();
    b.innerHTML=c;
}


function addElement(){
    //console.log(a)
    let text=document.getElementById("Txt").value
    array.push(text)
    console.log(array)
}