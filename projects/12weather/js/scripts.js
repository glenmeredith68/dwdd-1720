

// footer functionality 
let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;


// write a default zip 
let zip = localStorage.getItem('zip');
if (zip == null) {
    let defaultZip = '02053';
    localStorage.setItem('zip', defaultZip);
    zip = defaultZip;
}


// setting path to weather api
const apiKey = '5e02bd1d6d87a17f83809119a1f9fecb';
const apiLink = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`;

// fetch remote json
fetch(apiLink)
    .then((response) => response.json())
    .then((allData) => {
        console.log(allData);
    })

// ask for new zipcode


// data validate zipcode