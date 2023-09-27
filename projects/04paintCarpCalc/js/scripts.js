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
  const qualityName = document.querySelector("#quality").dataset.name;

  let carpet = Math.ceil((width * depth) / 9);
  carpet += " yards of carpet";

  let tack = width * 2 + depth * 2;
  tack += "feet of tackstrip";

  let walls = width * height * 2 + depth * height * 2;
  let gallons = Math.ceil(walls / quality);
  gallons += `gallons of ${qualityName}paint`;
  console.log(gallons);
}); // end of the calculate function
