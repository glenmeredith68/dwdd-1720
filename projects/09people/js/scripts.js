import { people } from "./people.js";

// footer functionality
let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

const nav = document.querySelector("nav");
const cardsHere = document.querySelector(".cards-here");

// create filter buttons
const allBtn = document.createElement('button');
allBtn.textContent = 'All Characters';
allBtn.addEventListener('click', () => {
    displayPeople(people);
})

const femaleBtn = document.createElement('button');
femaleBtn.textContent = 'Females';
femaleBtn.addEventListener('click', () => {
    const femaleArray = people.filter(person => person.gender === 'female');
    displayPeople(femaleArray);
})

const maleBtn = document.createElement('button');
maleBtn.textContent = 'Males';
maleBtn.addEventListener('click', () => {
    const maleArray = people.filter(person => person.gender === 'male');
    displayPeople(maleArray);
})

const otherBtn = document.createElement('button');
otherBtn.textContent = 'Other';
otherBtn.addEventListener('click', () => {
    const otherArray = people.filter(person => person.gender != 'male' && person.gender != 'female');
    displayPeople(otherArray);
})


// append buttons to page
nav.appendChild(allBtn);
nav.appendChild(femaleBtn);
nav.appendChild(maleBtn);
nav.appendChild(otherBtn);

// loop through the people
function displayPeople(x) {
    cardsHere.textContent = '';
  x.forEach(
    (person) => {
      const card = document.createElement("section");
      const img = document.createElement("img");
      const urlArray = person.url.split("/");
      img.src = `https://starwars-visualguide.com/assets/img/characters/${urlArray[5]}.jpg`;
      img.alt = person.name;

      const caption = document.createElement("p");
      caption.textContent = person.name;

      // assign gender class
      switch (person.gender) {
        case "female":
          card.className = "female";
          break;
        case "male":
          card.className = "male";
          break;
        default:
          card.className = "other";
      } // end of switch

      // assemble parts
      card.appendChild(img);
      card.appendChild(caption);
      cardsHere.appendChild(card);
    } // end of fat arrow
  ); //end of the loop
} // end of function
displayPeople(people);
