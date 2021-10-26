const elWrapper = document.querySelector('.wrapper');
const elHamburgerMenu = document.querySelector('.hamburger__menu');
const elMenu = document.querySelector('.menu');

// Listener parent element click event
elWrapper.addEventListener('click', (evt) => {
    const isHamburgerMenu = evt.target.matches('.hamburger__menu') || evt.target.matches('.hamburger__icon');

    // Open or Close Hamburger Menu
    if (isHamburgerMenu) {
        elHamburgerMenu.classList.toggle('hamburger__menu--open');
        elMenu.classList.toggle('menu--open');
    }
    // Open or Close Sub Menu
    else if (evt.target.matches('.menu__link')) {
        evt.target.classList.toggle('menu__link--click');
    }
})