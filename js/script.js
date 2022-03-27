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

const playButton = document.querySelector('.play-button');
const videoContainer = document.querySelector('video.product-img');


playButton.addEventListener('click', evt => {
    console.log('hello');
    if (videoContainer.paused) {
        playButton.innerHTML = "<i class=\"fa-regular fa-circle-pause\"></i>";
        videoContainer.play();
        playButton.style.top = "350px";
        playButton.style.left = "25px"
        // setInterval(() => {
        //     playButton.style.left = "25px"
        // }, 3000)
    } else {
        playButton.innerHTML = "<i class=\"fa-solid fa-circle-play\"></i>";
        videoContainer.pause();
        playButton.style.top = "210px";
        playButton.style.left = "150px"
    }

})