let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

let button = document.querySelector("#calculate");
button.addEventListener("click", () => {
  const width = Number(document.querySelector("#width").value);
  const depth = Number(document.querySelector("#depth").value);
  const height = Number(document.querySelector("#height").value);
  const paintType = document.querySelector("#quality").selectedOptions[0].text;
  const quality = Number(
    document.querySelector("#quality").selectedOptions[0].value
  );

// logs
console.log('width = ' + width);
console.log('height = ' + height);
console.log('depth = ' + depth);
console.log('quality = ' + quality);



let carpet = Math.ceil((width * depth) / 9);
carpet += " yards of carpet";
console.log('carp = ' + carpet);

let tack = width * 2 + depth * 2;
tack += " feet of tackstrip";
console.log('tack = ' + tack);

  let walls = width * height * 2 + depth * height * 2;
  console.log(walls);
  let gallons = Math.ceil(walls / quality);
  gallons += ` gallons of ${paintType} paint for the walls`;
  console.log(gallons);

  let ceiling = Math.ceil(width * depth / 400);
  console.log('ceiling needs ' + ceiling);

  let primer = ceiling + walls;

// adding to list now
let carpList = document.querySelector('#carpet');
let tackLi = document.createElement('li');
let carpetLi = document.createElement('li');
carpetLi.textContent = carpet;
tackLi.textContent = tack;
carpList.appendChild(carpetLi);
carpList.appendChild(tackLi);

let paintList = document.querySelector('#paint');
let primerLi = document.createElement('li');
let gallonsLi = document.createElement('li');
primerLi.textContent = primer;
gallonsLi.textContent = gallons;
paintList.appendChild(primerLi);
paintList.appendChild(gallonsLi);



}); // end of the calculate function
