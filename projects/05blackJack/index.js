let firstCard = 5;
let secondCard = 8;

let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector('#message-el');
let sumP = document.querySelector('#sum-el');
let cardsP = document.querySelector('#cards-el');

// start button
let startButton = document.querySelector("#startButton");
startButton.addEventListener("click", () => {
  if (sum <= 20) {
    message = "Draw new card?";
  } else if (sum === 21) {
    hasBlackjack = true;
    message = "Woohoo blackjack!";
  } else {
    isAlive = false;
    message = "You lose!";
  }

  // cash out!
  messageEl.textContent = message;
  sumP.textContent =`Sum: ${sum}`;
  cardsP.textContent =`Cards: ${firstCard}, ${secondCard}`;
});


// new card button 
let newCardButton = document.querySelector('#newCard');
newCardButton.addEventListener('click', () => {
    console.log('drawing new card');
});
