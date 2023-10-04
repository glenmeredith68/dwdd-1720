let firstCard = 5;
let secondCard = 8;

let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = '';

if (sum <= 20) {
    message = 'Draw new card?';
} else if (sum === 21) {
    hasBlackjack = true;
    message = 'Woohoo blackjack!';
} else {
    isAlive = false;
    message = 'You lose!';
}

// cash out! 
console.log(message);


// draw to screen
