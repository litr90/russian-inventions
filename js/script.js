console.log('hello');
const burger_button = document.querySelector('#burger-menu-button');
const nav_links = document.querySelector('#header-nav-links');

burger_button.addEventListener('click', () =>{
    nav_links.classList.toggle('header-nav-links-active');
});

const button_open_modal_1 = document.querySelector('#button-open-modal-1');
const button_close_modal_1 = document.querySelector('#button-close-modal-1');
const modal_1 = document.querySelector('#modal-1')

button_open_modal_1.addEventListener('click', () =>{
    // modal_1.classList.toggle('header-nav-links-active');
    modal_1.style.display = 'block';
});
button_close_modal_1.addEventListener('click', () =>{
    modal_1.style.display = 'none';
});

document.addEventListener('click', function(event) {
    if (event.target === modal_1) {
        // if (event.target !== modal_1)
        modal_1.style.display = 'none';
    };
    
});