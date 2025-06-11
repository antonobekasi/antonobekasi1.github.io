/* SHOW SIDEBAR */

let SideBar = document.querySelector('.SideBar');
let openSideBar = document.querySelector('.open');
let closeSideBar = document.querySelector('.close');
let blur_box = document.querySelector('.blur_box');

openSideBar.addEventListener('click',() =>{
    SideBar.classList.add('show_SideBar');
    blur_box.classList.add('show_blur_box');
});

closeSideBar.addEventListener('click',() =>{
    SideBar.classList.remove('show_SideBar');
    blur_box.classList.remove('show_blur_box');
});

/* PRODUCTS SWIPER SLIDER */

var swiper = new Swiper(".productSwiper", {
    slidesPerView:3,
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints:{
        1200:{
            slidesPerView: 2,
        },
        900:{
            slidesPerView: 9,
        },
        500:{
            slidesPerView: 1,
        },
    },
});

/* TESTIMONIAL SWIPER SLIDER */

var swiper = new Swiper(".testSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});