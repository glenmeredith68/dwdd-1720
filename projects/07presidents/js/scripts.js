const stoogeData = [{
    "name": "Curly",
    "born": 1903
},
{
    "name":"Moe",
    "born":"1897"
}]


const cardPointer = document.querySelector('#cards');

let theName = document.createElement('h2');
let theBirth = document.createElement('p');

theName.textContent = stoogeData[0].name;
theBirth.textContent = stoogeData[0].born;

cardPointer.appendChild(theName);
cardPointer.appendChild(theBirth);

function~