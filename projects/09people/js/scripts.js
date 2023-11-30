import { people } from './people.js';

// footer functionality 
let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

const nav = document.querySelector('nav');
const cardsHere = document.querySelector('.cards-here');

// loop through the people
function displayPeople(x) {
x.forEach( person => {
    const card = document.createElement('section');
    const img = document.createElement('img');
    const urlArray = person.url.split('/');
    img.src = `https://starwars-visualguide.com/assets/img/characters/${urlArray[5]}.jpg`


    const caption = document.createElement('figcaption');
    caption.textContent = person.name;

    // assemble parts 
    card.appendChild(img);
    card.appendChild(caption);
    cardsHere.appendChild(card);
} // end of fat arrow
) //end of the loop

} // end of function
displayPeople(people);