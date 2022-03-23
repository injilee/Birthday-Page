'use strict';

const popUp = document.querySelector('.popup');
const popUpBtn = document.querySelector('.popup__btn');
const imoji = document.querySelector('.imoji');

popUpBtn.addEventListener('click', () => {
    setTimeout(() => {
        popUp.style.display = 'none';
    }, 1000);
    popUp.classList.add('visible');
});

imoji.addEventListener('click', ()=> {
    alert('생일을 축하해줘요! 빰바밤!');
});