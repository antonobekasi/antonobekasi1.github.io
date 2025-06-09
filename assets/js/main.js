/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /* Menu Show */
if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add('show-menu')
    }
    
    )
}      
      /* Menu hidden */

if(navClose){
    navClose.addEventListener('click' , () =>{
        navMenu.classList.remove('show-menu')
    }
    )
}      

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)


/*=============== SWIPER FAVORITES ===============*/ 
const swiperFavourites = new Swiper('.favourites__swiper', {
   
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
  
   
  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/






/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration:2500,
    delay:300,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__circle, .home__img` , {delay:600, scale:.5})
sr.reveal(`.home__chips-1, .home__chips-2 , .home__chips-3` , {delay:1000, interval:100})