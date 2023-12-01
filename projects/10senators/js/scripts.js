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
    console.log(imgSize);
    small.classList.add('selected');
    medium.classList.remove('selected');
    large.classList.remove('selected');
    filterCards(selectedVal, imgSize);
    
})
medium.addEventListener('click', () => {
    imgSize = '-100px.jpeg';
    console.log(imgSize);
    medium.classList.add('selected');
    small.classList.remove('selected');
    large.classList.remove('selected');
    filterCards(selectedVal, imgSize);
})
large.addEventListener('click', () => {
    imgSize = '-200px.jpeg';
    large.classList.add('selected');
    small.classList.remove('selected');
    medium.classList.remove('selected');
    filterCards(selectedVal, imgSize);
})


// make senator cards
const linkBase = 'https://www.govtrack.us/static/legislator-photos/'
const main = document.querySelector('main');

function filterCards(query, imgSize) {
    main.textContent = '';
    for (let i = 0; i < senators.length; i++) {
        console.log(query);
        if (query == 'all') {
            makeCard(senators[i], imgSize);
        } else if (query == 'women') {
            if (senators[i].gender == 'F') {
                makeCard(senators[i], imgSize);
            }
        } else if (query == 'men') {
            if (senators[i].gender == 'M') {
                makeCard(senators[i], imgSize);
            }
        } else if ((query == 'republican') && (senators[i].party == 'R')) {
            makeCard(senators[i], imgSize);
        } else if ((query == 'democrat') && (senators[i].party == 'D')) {
            makeCard(senators[i], imgSize);
        }
        else {
            makeCard(senators[i], imgSize);
        }
    }
}
filterCards('all', imgSize);

function makeCard(senator, imgSize) {
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
    console.log(img.src);
    descrip.textContent = senator.party + ' from ' + senator.state;
    phone.href = `tel: ${senator.phone}`;
    phone.textContent = senator.phone;

    // color R or D borders
    if (senator.party == 'R') {
        card.style.border = '3px solid red';
    } else if (senator.party == 'D') {
        card.style.border = '3px solid blue'
    };
}

// add filter button functionality
let allBtn = document.querySelector('.all-senators');
let allVal = 'all';
let womenBtn = document.querySelector('.women');
let womenVal = 'women';
let menBtn = document.querySelector('.men');
let menVal = 'men';
let republicanBtn = document.querySelector('.republican');
let repVal = 'republican';
let democratBtn = document.querySelector('.democrat');
let demVal = 'democrat';

let selectedVal;

allBtn.addEventListener('click', () => {
    allBtn.classList.add('selected')
    womenBtn.classList.remove('selected')
    menBtn.classList.remove('selected')
    republicanBtn.classList.remove('selected')
    democratBtn.classList.remove('selected')
    selectedVal = allVal;
    filterCards(allVal, imgSize);
})
womenBtn.addEventListener('click', () => {
    allBtn.classList.remove('selected')
    womenBtn.classList.add('selected')
    menBtn.classList.remove('selected')
    republicanBtn.classList.remove('selected')
    democratBtn.classList.remove('selected')
    selectedVal = womenVal;
    filterCards('women', imgSize);

})
menBtn.addEventListener('click', () => {
    allBtn.classList.remove('selected')
    womenBtn.classList.remove('selected')
    menBtn.classList.add('selected')
    republicanBtn.classList.remove('selected')
    democratBtn.classList.remove('selected')
    filterCards('men', imgSize);
})
republicanBtn.addEventListener('click', () => {
    allBtn.classList.remove('selected')
    womenBtn.classList.remove('selected')
    menBtn.classList.remove('selected')
    republicanBtn.classList.add('selected')
    democratBtn.classList.remove('selected')
    filterCards('republican', imgSize);
})
democratBtn.addEventListener('click', () => {
    allBtn.classList.remove('selected')
    womenBtn.classList.remove('selected')
    menBtn.classList.remove('selected')
    republicanBtn.classList.remove('selected')
    democratBtn.classList.add('selected')
    filterCards('democrat', imgSize);
})
