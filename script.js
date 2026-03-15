// NAV MENU

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});


// CLOSE MENU AFTER CLICK (mobile UX)

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});


// SERVICE TO CONTACT

function goToContact(service){

localStorage.setItem("service", service);

window.location.href = "contact.html";

}


// CONTACT PAGE TITLE

window.onload = function(){

let service = localStorage.getItem("service");

let title = document.getElementById("serviceTitle");

if(service && title){

title.innerText = "Staffing Request: " + service;

}

}


// FADE ANIMATION

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add('visible');

observer.unobserve(entry.target);

}

});

}, appearOptions);

faders.forEach(fader => {

appearOnScroll.observe(fader);

});