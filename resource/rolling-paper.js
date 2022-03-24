'use strict';

const userImg = document.querySelector('.comments__user');
const toggleBtn = document.querySelector('.dropdown__toggle');
const menu = document.querySelector('.dropdown__menu');
const options = document.querySelector('.dropdown__option');

const input = document.getElementById('comments__input');
const sendBtn = document.querySelector('.comments__btn');

const ul = document.querySelector('.rolling__paper__list');
const profile = document.querySelector('.user');
const userName = document.querySelector('.user__name');
const content = document.querySelector('.content');

let commentList = [];

const COMMENT_KEY = "comment";

function saveCommentList(){
    localStorage.setItem(COMMENT_KEY, JSON.stringify(commentList));
}

function addSticker(newCommentObj){
    const li = document.createElement('li');
    li.id = newCommentObj.id;
    li.classList.add('sticker');
    ul.appendChild(li);
    const div = document.createElement('div');
    div.classList.add('profile');
    
    li.innerHTML = `<div class="profile">
    <img class="user" src="${src}" alt="">
    <span class="user__name">${user}</span>
    </div>
    <div class="content">${message}</div>`;
}

function resetInput(){
    menu.classList.remove('show');
    userImg.src = './assets/Hearts.png';
    toggleBtn.textContent = '프로필을 선택해주세요';
    src = userImg.src;
    user = '';
    input.value = '';
}

function clickToggle(){
    menu.classList.toggle('show');
    toggleBtn.textContent = '프로필을 선택해주세요';
    toggleBtn.classList.remove('selected');
}

function selectOption(evt){
    const target = evt.target;
    toggleBtn.textContent = target.textContent;
    toggleBtn.classList.add('selected');
    menu.classList.remove('show');
    changeImg(evt);
}

let imgValue = 0;
let src = userImg.src;
let user = '';
let message = '';

function getInfo(){
    message = input.value;
    const newCommentObj = {
        message: message,
        user: user,
        src: src,
        id: Date.now()
    };
    console.log(newCommentObj.id);
    commentList.push(newCommentObj);
    addSticker(newCommentObj);
    saveCommentList();
    resetInput();
}

function changeImg(event){
    const target = event.target.value;
    let name = event.target.textContent.trim();
    
    if(target === "1"){
        userImg.src = './assets/bada.jpg';
        src = userImg.src;
        imgValue = target;
        user = name;
    } else if (target === "2"){
        userImg.src = './assets/seoyoung.jpg';
        src = userImg.src;
        imgValue = target;
        user = name;
    } else if (target === "3"){
        userImg.src = './assets/soyoun.jpg';
        src = userImg.src;
        imgValue = target;
        user = name;
    } else if (target === "4"){
        userImg.src = './assets/yungkung.jpg';
        src = userImg.src;
        imgValue = target;
        user = name;
    } else if (target === "5"){
        userImg.src = './assets/eonhea.jpg';
        src = userImg.src;
        imgValue = target;
        user = name;
    } else if (target === "6"){
        userImg.src = './assets/inji.jpg';
        src = userImg.src;
        imgValue = target;
        user = name;
    } else if (target === "7"){
        userImg.src = './assets/jisun.jpg';
        src = userImg.src;
        imgValue = target;
        user = name;
    } else if (target === "8"){
        userImg.src = './assets/jimin.jpg';
        src = userImg.src;
        imgValue = target;
        user = name;
    }
}

input.addEventListener('input', () => {
    message = input.value;
});

sendBtn.addEventListener('click', () => {
    if(user == ''){
        alert('프로필 선택해주세요 😥');
        toggleBtn.focus();
    } else if(input.value == ''){
        alert('메시지를 입력해주세요 😟');
        input.focus();
    } else {
        getInfo();
    }
});

toggleBtn.addEventListener('click', () => {
    clickToggle();
});

toggleBtn.addEventListener('blur', () => {
    resetInput();
});

menu.addEventListener('click', (evt) => {
    selectOption(evt);
});

const savedCommentList = localStorage.getItem(COMMENT_KEY);

if(savedCommentList !== null){
    const parsedComment = JSON.parse(savedCommentList);
    commentList = parsedComment;
    parsedComment.forEach(getInfo);
}