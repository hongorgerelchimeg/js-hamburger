let btnOpen = document.querySelector('.fa-bars');
let btnClose = document.querySelector('.fa-times');
let hamburgerMenu = document.querySelector('.hamburger-menu')

// Function Display Hamburger Menu

btnOpen.addEventListener('click', 
    function() {
        hamburgerMenu.style.display = 'block'
    });

// Function Hide Hamburger Menu

btnClose.addEventListener('click', 
    function() {
        hamburgerMenu.style.display = 'none'
    });

    