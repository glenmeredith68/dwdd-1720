import { recipes } from "./recipes.js";

// footer functionality
let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

// html references
const nav = document.querySelector("nav");
const viewer = document.querySelector(".viewer");
const aside = document.querySelector("aside");
const ham = document.querySelector(".hamburger");
ham.addEventListener("click", () => {
  aside.classList.toggle("show");
});

// nav items
recipes.forEach((recipe) => {
  const button = document.createElement("button");
  button.textContent = recipe.name;
  button.addEventListener("click", () => showRecipe(recipe));

  aside.appendChild(button);
});

// aside.addEventListener("click", () => {
//     let buttons = Array.from(aside.children);
//         console.log(buttons);
//         buttons.foreach(x => x.classList.remove('selected'));
//         button.classList.add('selected');
// });


function showRecipe(recipe) {
  let section = document.createElement("section");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let ingredients = document.createElement("ul");
  let directions = document.createElement("ol");

  h2.textContent = recipe.name;
  img.src = `images/${recipe.photo}`;
  img.alt = recipe.name;
  ingredients.textContent = `Ingredients`;
  directions.textContent = "Directions";

  recipe.ingredients.forEach((ingredient) => {
    let li = document.createElement("li");
    li.textContent = ingredient;
    ingredients.appendChild(li);
  });
  recipe.directions.forEach((step) => {
    let li = document.createElement("li");
    li.textContent = step;
    directions.appendChild(li);
  });

  // assemble card
  section.appendChild(h2);
  section.appendChild(img);
  section.appendChild(ingredients);
  section.appendChild(directions);
  viewer.textContent = "";
  viewer.appendChild(section);
}
showRecipe(recipes[0]);
