import {friends} from '../data/friends.js';

// footer functionality 
let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

// html references 
const nav = document.querySelector('nav');
const viewer = document.querySelector('.viewer');

// months
const months = ['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// nav items 
friends.forEach(friend => {
    const button = document.createElement('button');
    button.textContent = friend.first + ' ' + friend.last;
    button.addEventListener('click', () => showFriend(friend));

    nav.appendChild(button);
})

function showFriend(friend) {
    console.log(friend);
    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let birthday = document.createElement('p');
    let job = document.createElement('p');
    let hobbies = document.createElement('ul');

    h2.textContent = `${friend.first} ${friend.last}`;
    img.src = `images/${friend.photo}`;
    img.alt = friend.first;
    job.textContent = `EMPLOYMENT: ${friend.employed}`;
    birthday.textContent = `BIRTHDAY: ${months[friend.bornMonth-1]} ${friend.bornDay}, ${friend.bornYear}`;

    friend.hobbies.forEach(hobby => {
        let li = document.createElement('li');
        li.textContent = hobby;
        hobbies.appendChild(li);
    })

    // assemble card
    section.appendChild(h2);
    section.appendChild(img);
    section.appendChild(birthday);
    section.appendChild(job);
    section.appendChild(hobbies);
    viewer.textContent = '';
    viewer.appendChild(section);
    
}