
const hex = [0, 1, 2, 3, 4, 5,6,7,8,9, "A", "B" , "C", "D", "E", "F", ];

const color = document.querySelector(".color");


var showcolor = document.getElementById("screen"); 

function changeColor(){
    var hexColor = "#"; 
    for (var i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    
    showcolor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

}

function getRandomNumber(){
    
    return Math.floor(Math.random()*hex.length);
}

