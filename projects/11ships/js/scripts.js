const nav = document.querySelector("nav");
const main = document.querySelector("main");

fetch("js/starships.json")
  .then((response) => response.json())
  .then((shipArray) => {
    populateNav(shipArray);
  });

//populate nav
function populateNav(allShips) {
  allShips.forEach((ship) => {
    let btn = document.createElement("button");
    btn.textContent = ship.name;
    btn.addEventListener("click", () => {
        showShip(ship);
        let buttons = Array.from(nav.children);
        buttons.forEach(button => button.classList.remove('selected'));
        btn.classList.add('selected');

    }); // end of event listener
    nav.appendChild(btn);
  });
} // end of nav function

// ship viewer
function showShip(shipData) {
  // create image etc
  let section = document.createElement("section");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");

  // data to image
  let urlArray = shipData.url.split("/");

  img.src = `https://www.starwars-visualguide.com/assets/img/starships/${urlArray[5]}.jpg`;
  img.alt = shipData.name;
  h3.textContent = shipData.name;

    // error checking for image
    img.addEventListener('error', () => {
        img.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
        h3.textContent = `The ${shipData.name} is in dock for repairs.`;
        img.alt = `${ship.name} image not found.`;
    })

  // add image to page
  section.appendChild(img);
  section.appendChild(h3);
  main.textContent = "";
  main.appendChild(section);
}


