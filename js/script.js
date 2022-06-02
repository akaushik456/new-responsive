var menuBtn = document.querySelector('.social-icon');
var  menu = document.querySelector('.menu-links');
menuBtn.addEventListener('click', function (event) {
    console.log(event)
    menu.classList.toggle('open');
}, false);