// footer functionality 
let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;


// references ot the html
const weatherCard = document.querySelector('#weather-card');



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
        displayWeather(allData);
    })


// function that displays weather 
function displayWeather(weatherData){
    console.log(weatherData);
    // add town name
    const town = document.querySelector('#town');
    town.textContent = 'Weather for ' + weatherData.name;

    // current temp
    const temp = document.createElement('p');
    temp.className = 'temp';
    temp.textContent = weatherData.main.temp + '°';
    weatherCard.appendChild(temp);


    // date 
    const date = document.createElement('p');
    date.className = 'date';
    const d = new Date();
    date.textContent = d.toDateString();
    weatherCard.appendChild(date);

    // icon
    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    weatherIcon.alt = weatherData.weather[0].description;
    weatherCard.appendChild(weatherIcon);

    // description
    const weatherDescription = document.createElement('p');
    weatherDescription.className = 'weather-description';
    weatherDescription.textContent = weatherData.weather[0].description;
    weatherCard.appendChild(weatherDescription);

    // add sunrise/sunset
    const sunRiseSet = document.createElement('p');
    sunRiseSet.classList.add('sunrise');
    time = d.getTime();
    let sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});;
    let sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    console.log(time > (weatherData.sys.sunrise * 1000));
    if (time < (weatherData.sys.sunrise * 1000)) {
        sunRiseSet.textContent = `Sunrise: ${sunrise}`;
    } else {
        sunRiseSet.textContent = `Sunset: ${sunset}`;
    }
    weatherCard.appendChild(sunRiseSet);
}

// ask for new zipcode
const aside = document.querySelector('aside');
const cog = document.querySelector('#cog');
cog.addEventListener('click', () => {
    aside.classList.toggle('show');
})

// set new zip
const zipButton = document.querySelector('#apply-zip');
zipButton.addEventListener('click', () => {
    aside.classList.toggle('show');
    let newZip = document.querySelector('#new-zip').value;
    if (newZip.length == 5){
    localStorage.setItem('zip', newZip);
    };
    window.location.reload();
})



// data validate zipcode
let input = document.querySelector('input');
input.addEventListener('input', () => {
    input.value = input.value.slice(0, 5);
})