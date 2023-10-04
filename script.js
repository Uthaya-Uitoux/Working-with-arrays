const array=["hi",45,true,"element","get05"];
console.log(array);
//Display Array value into Inital Display
const dis_arry = document.querySelector("#array_display"); 
dis_arry.innerHTML = array.toString();


function addElement(){
    let element = document.getElementById("input").value
    //console.log(element)
    array.push(element)  
    document.getElementById("input").value = "";
    let results=document.querySelector("#array_display");
    results.textContent =array;
    
}
function addNum(){
    let element = document.getElementById("num_input").value
    //console.log(element)
    array.push(Number(element));
    document.getElementById("num_input").value = "";
    let results=document.querySelector("#array_display");
    results.textContent = array;
}
function removeElement(){
    let element = document.getElementById("input").value
    console.log(element)
    array.shift(element);
    let results=document.querySelector("#array_display");
    results.textContent = array;
}
function sortElement(){
    let element = document.getElementById("input").value
    console.log(element)
    array.sort(); 
    let results=document.querySelector("#array_display");
    results.textContent = array;
}
function reverseElement(){
    let element = document.getElementById("input").value
    console.log(element);
    array.sort();
    array.reverse(); 
    let results=document.querySelector("#array_display");
    results.textContent = array;
}
function findNumAndFilter(){
    console.log('Filter Array => ',array);
    let find= array.filter(element => typeof element === 'number');
    console.log('Filter Value => ',find.toString());
    let results=document.querySelector("#array_display");
    results.textContent = find.toString(); 
}
function numFilterAndSort(){
    console.log('Filter Array => ',array);
    let find= array.filter(element => typeof element === 'number');
    let as=find.sort(function(a, b) {
        return a - b;
});
console.log(as);
    
    let results=document.querySelector("#array_display");
    results.textContent = find.sort(function(a, b) {
        return a - b;
});
}