let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar")
let videoBtn = document.querySelectorAll('.vid-btn')



window.onscroll = () => {
    searchBtn.classList.remove('bx-x-circle');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
};


menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
});



searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('bx-x-circle');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// vdo part home

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;

    })
})
