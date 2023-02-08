var count = document.getElementById("count-elements");
var sum = 0;

function increment(){
    sum += 1;
    count.innerText = sum;
    return sum;
}

var saveEl = document.getElementById("record");

function save(){
    var countHs = increment()-1 + " - "
    saveEl.textContent += countHs ;
    count.innerText = 0;
    sum = 0;
    
}