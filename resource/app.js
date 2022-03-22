'use strict';

const popUp = document.querySelector('.popup');
const popUpBtn = document.querySelector('.popup__btn');


popUpBtn.addEventListener('click', () => {
    setTimeout(() => {
        popUp.style.display = 'none';
    }, 1000);
    popUp.classList.add('visible');
});