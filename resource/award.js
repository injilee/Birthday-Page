'use strict';

const rect = document.querySelector('.rectangle__items');

const userCard = document.querySelector('.user__card');
const userImg = document.querySelector('.user');
const profileName = document.querySelector('.profile strong');
const profileInfo = document.querySelector('.profile p');

rect.addEventListener('click', (event) => {
    const card = userCard.className;
    const target = event.target.className;
    if(target === 'rectangle__item item1'){
        userImg.src = './assets/seoyoung.jpg';
        profileName.textContent = '백서영';
        profileInfo.textContent = '1월 10일';
    } else if (target === 'rectangle__item item2'){
        userImg.src = './assets/soyoun.jpg';
        profileName.textContent = '이소연';
        profileInfo.textContent = '3월 25일';
    } else if (target === 'rectangle__item item3'){
        userImg.src = './assets/jisun.jpg';
        profileName.textContent = '심지선';
        profileInfo.textContent = '4월 01일';
    } else if (target === 'rectangle__item item4'){
        userImg.src = './assets/bada.jpg';
        profileName.textContent = '한바다';
        profileInfo.textContent = '3월 17일';
    } else if (target === 'rectangle__item item5'){
        userImg.src = './assets/yungkung.jpg';
        profileName.textContent = '박영경';
        profileInfo.textContent = '3월 18일';
    } else if (target === 'rectangle__item item6'){
        userImg.src = './assets/eonhea.jpg';
        profileName.textContent = '김은혜';
        profileInfo.textContent = '11월 08일';
    } else if (target === 'rectangle__item item7'){
        userImg.src = './assets/jimin.jpg';
        profileName.textContent = '장지민';
        profileInfo.textContent = '4월 20일';
    } else if (target === 'rectangle__item item8'){
        userImg.src = './assets/inji.jpg';
        profileName.textContent = '이인지';
        profileInfo.textContent = '8월 16일';
    }
    if(card === 'user__card hidden'){
        userCard.classList.remove('hidden');
    }
});