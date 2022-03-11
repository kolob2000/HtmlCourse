"use strict";

const burger = document.querySelector('#burger-menu_button');
const cross = document.querySelector('.burger-popover_close');
const popover = document.querySelector('.burger-popover_menu');
burger.addEventListener('click', () => {
    popover.classList.toggle('hidden');
});
cross.addEventListener('click', () => {
    popover.classList.toggle('hidden');
});