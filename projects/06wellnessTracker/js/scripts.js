let saveBtn = document.querySelector('#saveProfile');

saveBtn.addEventListener('click', () => {
    let firstName = document.querySelector('input[name="first"]');
    localStorage.setItem('order-first', firstName.value);

    let lastName = document.querySelector('input[name="last"]');
    localStorage.setItem('order-last', lastName.value);

    let select = document.querySelector('#food');

    let foodURL = select.options[select.selectedIndex].value;
    localStorage.setItem('order-food-url', foodURL);

    let foodText = select.options[select.selectedIndex].text;
    localStorage.setItem('order-food-text', foodText);
})


const deleteBtn = document.querySelector('#deleteButton');
deleteBtn.addEventListener('click', () => {
    localStorage.removeItem('order-first');
    localStorage.removeItem('order-last');
    localStorage.removeItem('order-food-text');
    localStorage.removeItem('order-food-url');
    location.reload();
})

const check = localStorage.getItem('order-first');
if (check === null) {
    document.write('Please enter all the values.');
} else {
    document.querySelector('#fName').textContent = localStorage.getItem('order-first');
    document.querySelector('#lName').textContent = localStorage.getItem('order-last');
    document.querySelector('#foodChoice').textContent = localStorage.getItem('order-food-text');
    document.querySelector('#emoji').src = localStorage.getItem('order-food-url');
}


