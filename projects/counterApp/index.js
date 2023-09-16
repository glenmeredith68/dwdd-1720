let count = 0;
let saveP = document.getElementById('save-el');

function increment() {
    count++;
    document.getElementById('count-el').innerText = count;
}

function save() {
    let countDash = count + ' - ';
    saveP.textContent += countDash;
    count = 0;
    document.getElementById('count-el').innerText = count;
}