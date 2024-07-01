let hamburger = document.querySelector(".hamburger");
let nav = document.getElementsByClassName(".link");
let navBar = document.querySelector(".nav-bar");

hamburger.onclick = function(){
  navBar.classList.toggle("active");
//   navBar.classList.remove("active");
}

navBar.onclick = function(){
    navBar.classList.remove("active");
}




ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading', { origin: 'left' });
ScrollReveal().reveal('.home-img, .service-container , .portfolio-box,.contact form', { origin: 'right' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


//  typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'UI/UX Designing'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});