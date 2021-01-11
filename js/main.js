const body = document.querySelector('body')
const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.nav__menu');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});