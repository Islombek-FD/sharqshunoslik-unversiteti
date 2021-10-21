const elWrapper = document.querySelector('.wrapper');
const elHamburgerMenu = document.querySelector('.hamburger__menu');

elWrapper.addEventListener('click', (evt) => {
    const isHamburgerMenu = evt.target.matches('.hamburger__menu') || evt.target.matches('.hamburger__icon');

    if (isHamburgerMenu) {
        elHamburgerMenu.classList.toggle('hamburger__menu--open');
    }
})