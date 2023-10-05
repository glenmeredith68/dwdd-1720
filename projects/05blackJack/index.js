let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector('#message-el');
let sumP = document.querySelector('#sum-el');
let cardsP = document.querySelector('#cards-el');

let player = {
    name: 'Glen',
    chips: 145
};
let playerP = document.querySelector('#player-el');
playerP.textContent = `${player.name}: ${player.chips}`;

// get random card
function getRandomCard() {
    let randomNumber = Math.ceil(Math.random() * 13);
    if (randomNumber === 1) {
        randomNumber = 11;
    } else if (randomNumber > 10) {
        randomNumber = 10;
    };
    return randomNumber;
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
    
}



// start button
function renderGame() {
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
      let cardsText = '';
      for (let i = 0; i < cards.length; i++) {
        cardsText += `${cards[i]}, `;
      }
      cardsP.textContent =`Cards: ${cardsText}`;
}

let startButton = document.querySelector("#startButton");
startButton.addEventListener('click', startGame);


// new card button 
let newCardButton = document.querySelector('#newCard');
newCardButton.addEventListener('click', () => {
    if (isAlive && !hasBlackjack){
        console.log('drawing new card');
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
});
