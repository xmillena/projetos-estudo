
var cards = [];
var sum = 0;
var hasBlackjack = false;
var isAlive = false;
var msg = "";
var messageEl = document.getElementById("msg-el");
var sumEl = document.querySelector("#sum-el");
var cardsEl = document.querySelector("#cards-el")

function startGame(){
    isAlive = true;
    var firstCard = getRandomCard();
    var secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard+secondCard;
    renderGame();
}
function getRandomCard(){
   var randn = Math.floor(Math.random()*13)+1;
    if(randn==1){
        return 11;
    }
    else if(randn>10){
        return 10;
    }else{
        return randn;
    }
}

function renderGame(){
   cardsEl.textContent = "Cards: "
   for(var i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " - ";
    }
     sumEl.textContent = "Sum: " + sum;
    if (sum<=20){

        msg = "Do you want to draw a new card?"

    }
    else if(sum == 21){
        msg = "You've got a blackjack!"
        hasBlackjack = true;
    } 
    else {
        msg = "You're out of the game"
        isAlive = false;
    }
        messageEl.textContent = msg;
}


function withDrawCard(){
    if(isAlive == true && hasBlackjack ==false){
        var newCard = getRandomCard()
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
    
}