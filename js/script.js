console.log('hello');
const burger_button = document.querySelector('#burger-menu-button');
const nav_links = document.querySelector('#header-nav-links');

burger_button.addEventListener('click', () =>{
    nav_links.classList.toggle('header-nav-links-active');
})