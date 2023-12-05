import { recipes } from "recipes.js";

// footer functionality
let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

// html references 
const nav = document.querySelector('nav');
const viewer = document.querySelector('.viewer');

// nav items 
recipes.forEach(recipe => {
    const button = document.createElement('button');
    button.textContent = recipe.name;
    button.addEventListener('click', () => showRecipe(recipe));

    nav.appendChild(button);
})


function showRecipe(recipe) {
    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let ingredients = document.createElement('ul');
    let directions = document.createElement('ul');

    h2.textContent = recipe.name;
    img.src = `images/${recipe.photo}`;
    img.alt = recipe.name;
    finish.textContent = `Finish: ${recipe.finish}`;
    dimensions.textContent = 'Dimensions';

    recipe.dimensions.forEach(dimension => {
        let li = document.createElement('li');
        li.textContent = dimension;
        dimensions.appendChild(li);
    })

    // assemble card
    section.appendChild(h2);
    section.appendChild(img);
    section.appendChild(dimensions);
    section.appendChild(finish);
    viewer.textContent = '';
    viewer.appendChild(section);
    
}
showProduct(products[0]);