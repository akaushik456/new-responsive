var menuBtn = document.querySelector('.social-icon');
var  menu = document.querySelector('.menu-links');
menuBtn.addEventListener('click', function (event) {
    console.log(event)  
    menu.classList.toggle('open');

}, false);
var sndBtn = document.querySelector('.cstm-btn');
   sndBtn.addEventListener('click', function (event) {
       alert("it's not working");
   });