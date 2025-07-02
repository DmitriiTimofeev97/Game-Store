//Скрипт навигационного меню

let navItems = document.querySelectorAll(".nav__link_hamburger");
const features = document.querySelector("#features");
const bannerImg = document.querySelector("#banner-img");
const cards = document.querySelector("#cards");
const navToggle = document.querySelector("#navi-toggle");

navItems.forEach(item => {
item.addEventListener('click', function(){
    if (navToggle.checked){
        navToggle.checked = false;
    } else {
        navToggle.checked = true;
    }
});
});

//Скрипт кнопки прокрутки к началу страницы

const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});