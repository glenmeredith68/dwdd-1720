import {senators} from "./senators.js";

// footer functionality 
let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

// function to set the image size
let imgSize = '-100px.jpeg';
let small = document.querySelector('.small');
let medium = document.querySelector('.medium');
let large = document.querySelector('.large');
small.addEventListener('click', () => {
    imgSize = '-50px.jpeg';
    small.classList.add('selected');
    medium.classList.remove('selected');
    large.classList.remove('selected');
    
})
medium.addEventListener('click', () => {
    imgSize = '-100px.jpeg';
    medium.classList.add('selected');
    small.classList.remove('selected');
    large.classList.remove('selected');
})
large.addEventListener('click', () => {
    imgSize = '-200px.jpeg';
    large.classList.add('selected');
    small.classList.remove('selected');
    medium.classList.remove('selected');
})


// make senator cards
const linkBase = 'https://www.govtrack.us/static/legislator-photos/'
const main = document.querySelector('main');

function filterCards(query) {
    for (let i = 0; i < senators.length; i++) {
        console.log(query);
        if (query = 'all') {
            makeCard(senators[i]);
        } else if (query = 'women') {
            if (senators[i].gender = 'F') {
                makeCard(senators[i]);
            }
        } else if (query = 'men') {
            if (senators[i].gender = 'M') {
                makeCard(senators[i]);
            }
        } else if ((query = 'republican') && (senators[i].party = 'R')) {
            makeCard(senators[i]);
        } else if ((query = 'democrat') && (senators[i].party = 'D')) {
            makeCard(senators[i]);
        }
        else {
            makeCard(senators[i]);
        }
    }
}
filterCards();

function makeCard(senator) {
    // create html elements
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    let descrip = document.createElement('p');
    let phone = document.createElement('a');
    // attach elements
    main.appendChild(card);
    card.appendChild(h2);
    card.appendChild(imgDiv);
    imgDiv.appendChild(img);
    card.appendChild(descrip);
    card.appendChild(phone);
    
    // fill elements
    h2.textContent = senator.first_name + ' ' + senator.last_name;
    img.src = linkBase + senator.govtrack_id + imgSize;
    descrip.textContent = senator.party + ' from ' + senator.state;
    phone.href = `tel: ${senator.phone}`;
    phone.textContent = senator.phone;
}

// add filter button functionality
let allBtn = document.querySelector('.all-senators');
let womenBtn = document.querySelector('.women');
let menBtn = document.querySelector('.men');
let republicanBtn = document.querySelector('.republican');
let democratBtn = document.querySelector('.democrat');

allBtn.addEventListener('click', () => {
    allBtn.classList.add('selected')
    womenBtn.classList.remove('selected')
    menBtn.classList.remove('selected')
    republicanBtn.classList.remove('selected')
    democratBtn.classList.remove('selected')
    filterCards('all');
})
womenBtn.addEventListener('click', () => {
    allBtn.classList.remove('selected')
    womenBtn.classList.add('selected')
    menBtn.classList.remove('selected')
    republicanBtn.classList.remove('selected')
    democratBtn.classList.remove('selected')
    filterCards('women');

})
menBtn.addEventListener('click', () => {
    allBtn.classList.remove('selected')
    womenBtn.classList.remove('selected')
    menBtn.classList.add('selected')
    republicanBtn.classList.remove('selected')
    democratBtn.classList.remove('selected')
    filterCards('men');
})
republicanBtn.addEventListener('click', () => {
    allBtn.classList.remove('selected')
    womenBtn.classList.remove('selected')
    menBtn.classList.remove('selected')
    republicanBtn.classList.add('selected')
    democratBtn.classList.remove('selected')
    filterCards('republican');
})
democratBtn.addEventListener('click', () => {
    allBtn.classList.remove('selected')
    womenBtn.classList.remove('selected')
    menBtn.classList.remove('selected')
    republicanBtn.classList.remove('selected')
    democratBtn.classList.add('selected')
    filterCards('democrat');
    console.log('demo click');
})
