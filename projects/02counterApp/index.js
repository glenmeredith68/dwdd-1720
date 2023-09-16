let count = 0;
let saveP = document.querySelector('#save-el');
let incrementBtn = document.querySelector('#increment-btn');
let saveBtn = document.querySelector('#save-btn');


incrementBtn.onclick = function increment() {
    count++;
    document.querySelector('#count-el').innerText = count;
}

saveBtn.onclick = function save() {
    let countDash = count + ' - ';
    saveP.textContent += countDash;
    count = 0;
    document.querySelector('#count-el').innerText = count;
}