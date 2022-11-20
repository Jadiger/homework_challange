const body = document.querySelector('body');
const navList = document.querySelector('.nav_links');
const navLink1 = document.querySelector('#navlink1');
const navLink2 = document.querySelector('#navlink2');
const navLink3 = document.querySelector('#navlink3');
const navLink4 = document.querySelector('#navlink4');
const navLink5 = document.querySelector('#navlink5');
const menuBurger = document.querySelector('.menu_burger');
const closeMenu = document.querySelector('.close_menu');

menuBurger.addEventListener('click',()=> {
    navList.classList.remove('nav_link_transform');
    body.style.overflow = "hidden";
});

function closeFunc() {
    navList.classList.add('nav_link_transform');
    body.style.overflow = "auto";
}
closeMenu.addEventListener('click',closeFunc);
navLink1.addEventListener('click',closeFunc);
navLink2.addEventListener('click',closeFunc);
navLink3.addEventListener('click',closeFunc);
navLink4.addEventListener('click',closeFunc);
navLink5.addEventListener('click',closeFunc);