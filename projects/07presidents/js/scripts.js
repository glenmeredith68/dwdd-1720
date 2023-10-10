import {presidents} from '../data/presidents.js';

let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;



const presTarget = document.querySelector('#cards');
const pathStart = '//www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/';


for (let i = 0; i < presidents.length; i++) {
    let barDiv = document.createElement('div');
    barDiv.innerHTML = `<h3>${presidents[i].name}</h3>`;
    
    
    let myImage = document.createElement('img');
    myImage.setAttribute('src', pathStart + presidents[i].photo);
    myImage.setAttribute('alt', presidents[i].name);

    let myCaption = document.createElement('figcaption');
    myCaption.innerHTML = `Served ${presidents[i].took_office} to ${presidents[i].left_office}<br>Lived from ${presidents[i].born} to ${presidents[i].died}<br>Party: ${presidents[i].party} party`;

    let myFigure = document.createElement('figure');
    myFigure.appendChild(barDiv);
    myFigure.appendChild(myImage);
    myFigure.appendChild(myCaption);

    presTarget.appendChild(myFigure);
    
    
} // end of loop