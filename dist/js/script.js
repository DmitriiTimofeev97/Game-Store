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