let x = new Date();
let year = x.getFullYear();
let yearSpan = document.querySelector("#year");
yearSpan.textContent = year;

let addListItems = (listId, message) => {
  let addingList = document.querySelector(`#${listId}`);
  let liToAdd = document.createElement('li');
  liToAdd.textContent = message;
  addingList.appendChild(liToAdd);
};

let button = document.querySelector("#calculate");
button.addEventListener("click", () => {
  // clean out existing lists
  document.querySelector('#paint').innerHTML = '';
  document.querySelector('#carpet').innerHTML = '';
  const width = Number(document.querySelector("#width").value);
  const depth = Number(document.querySelector("#depth").value);
  const height = Number(document.querySelector("#height").value);
  const paintType = document.querySelector("#quality").selectedOptions[0].text;
  const quality = Number(
    document.querySelector("#quality").selectedOptions[0].value
  );

  let carpet = Math.ceil((width * depth) / 9);
  carpet += " yards of carpet";
  addListItems('carpet', carpet);

  let tack = width * 2 + depth * 2;
  tack += " feet of tackstrip";
  addListItems('carpet', tack);

  let walls = width * height * 2 + depth * height * 2;
  let gallons = Math.ceil(walls / quality);
  let gallonsValue = gallons;
  gallons += ` gallons of ${paintType} paint for the walls`;
  addListItems('paint', gallons);

  let ceiling = Math.ceil((width * depth) / 400);
  let primer =  ceiling + gallonsValue;
  ceiling += ' gallons of flat paint for the ceiling'
  addListItems('paint', ceiling);
  
  
  primer += ' gallons of primer';
  addListItems('paint', primer);
  
  // adding to list now
//   let carpList = document.querySelector("#carpet");
//   let tackLi = document.createElement("li");
//   let carpetLi = document.createElement("li");
//   carpetLi.textContent = carpet;
//   tackLi.textContent = tack;
//   carpList.appendChild(carpetLi);
//   carpList.appendChild(tackLi);

//   let paintList = document.querySelector("#paint");
//   let primerLi = document.createElement("li");
//   let gallonsLi = document.createElement("li");
//   primerLi.textContent = primer;
//   gallonsLi.textContent = gallons;
//   paintList.appendChild(primerLi);
//   paintList.appendChild(gallonsLi);
}); // end of the calculate function
