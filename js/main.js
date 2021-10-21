const elMain = document.querySelector('.main');
// const elMenuLinkAll = document.querySelectorAll('.menu__link');
// const elSubMenuAll = document.querySelectorAll('.sub-menu');
const elSiteMenu = document.querySelector('.site__menu');
const elSiteInfo = document.querySelector('.site__info');

elMain.addEventListener('click', (evt) => {
    if (evt.target.matches('.menu__link')) {
        evt.target.classList.toggle('menu__link--open');
    }
    else if (evt.target.matches('.hamburger__menu') || evt.target.matches('.hamburger__icon')) {
        elSiteMenu.classList.toggle('site__menu--open');
        elSiteInfo.classList.toggle('site__info--fluid');
    }
})

// elMenuLinkAll.forEach ((item , i) => item.dataset.menuLinkId = i);
// elSubMenuAll.forEach((e, i) => e.dataset.subMenuId = i);