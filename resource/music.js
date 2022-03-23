'use strict';

const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');

const sound = new Audio('./assets/audio/아카펠라 생일축하노래  Happy birthday song A capella.mp3');
playBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

function start(){
    playSound(sound);
}

function stop(){
    stopSound(sound);
}

function playSound(sound){
    sound.currentTime = 0;
    sound.volume = 0.5;
    sound.play();
}

function stopSound(sound){
    sound.currentTime = 0;
    sound.pause();
}