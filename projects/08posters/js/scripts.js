import { films } from "../data/films.js";

let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

const swPostersLink = "https://starwars-visualguide.com/assets/img/films/";
// add a number.jpeg

//create and append cards
let main = document.querySelector("main");
for (let i = 0; i < films.length; i++) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let spanWrapper = document.createElement('div');
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");

  main.appendChild(card);
  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(spanWrapper);
  spanWrapper.appendChild(span1);
  spanWrapper.appendChild(span2);
  spanWrapper.appendChild(span3);

  h2.textContent = films[i].title;
  img.src = swPostersLink + (i + 1) + '.jpg';
  span1.textContent = `Directed by: ${films[i].director}`;
  span3.textContent = `Produced by: ${films[i].producer}`;
  span2.textContent = `Release Date: ${films[i].release_date}`;
}

// list grid switch button functionlity
let gridBtn = document.querySelector('#grid');
let listBtn = document.querySelector('#list');
gridBtn.addEventListener('click', () => main.className = 'grid');
listBtn.addEventListener('click', () => main.className = 'list');