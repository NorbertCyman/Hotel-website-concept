const nav = document.querySelector(".nav-bar");
const mobileMenu = document.querySelector(".mobile-nav");
let lastScrollY = window.scrollY;
let out = true;
window.addEventListener("scroll", () => {
    if(scrollY>=100){
        nav.classList.add("nav-bar-out");
    } else {
        nav.classList.remove("nav-bar-out");
    }
    if (window.innerWidth > 550){
        if(lastScrollY < window.scrollY) {
            nav.classList.add("nav-hidden");
        } else {
            nav.classList.remove("nav-hidden");
        }
        lastScrollY = window.scrollY;
    }
});
window.addEventListener("resize", ()=> {
    if(window.innerWidth < 550){
        nav.classList.remove("nav-hidden");
        mobileMenu.classList.add("nav-mobile-hidden");
    }
});

function openMenu(){
    if(out){mobileMenu.classList.remove("nav-mobile-hidden");out=false;}
    else {mobileMenu.classList.add("nav-mobile-hidden");out=true;}
}