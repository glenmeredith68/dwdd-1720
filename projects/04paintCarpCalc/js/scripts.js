let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector('#year');
yearSpan.textContent = year;


let button = document.querySelector('#calculate');
button.addEventListener('click', () => {
    const width = Number(document.querySelector('#width').value);
    const depth = Number(document.querySelector('#depth').value);
    const height = Number(document.querySelector('#height').value);
    const paintType = document.querySelector('#quality').selectedOptions[0].text;
    const quality = Number(document.querySelector('#quality').selectedOptions[0].value);


}); // end of the calculate function 