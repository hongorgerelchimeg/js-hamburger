let btnOpen = document.querySelector('.fa-bars');
let btnClose = document.querySelector('.fa-times');
let hamburgerMenu = document.querySelector('.hamburger-menu');

const toggle = hamburgerMenu.classList;

// Function Display Hamburger Menu

btnOpen.addEventListener('click', 
    function() {
        toggle.add('active');
    });

// Function Hide Hamburger Menu

btnClose.addEventListener('click', 
    function() {
        toggle.remove('active');
    });

