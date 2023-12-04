import {products} from '../data/products.js';

// footer functionality 
let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

// html references 
const nav = document.querySelector('nav');
const viewer = document.querySelector('.viewer');

// nav items 
products.forEach(product => {
    const button = document.createElement('button');
    button.textContent = product.name;
    button.addEventListener('click', () => showProduct(product));

    nav.appendChild(button);
})

function showProduct(product) {
    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let finish = document.createElement('p');
    let dimensions = document.createElement('ul');

    h2.textContent = product.name;
    img.src = `images/${product.photo}`;
    img.alt = product.name;
    finish.textContent = `Finish: ${product.finish}`;
    dimensions.textContent = 'Dimensions';

    product.dimensions.forEach(dimension => {
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