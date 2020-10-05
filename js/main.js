const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.nav__list');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});