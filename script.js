function goToContact(service){

localStorage.setItem("service", service)

window.location.href = "contact.html"

}

window.onload = function(){

let service = localStorage.getItem("service")

if(service){

let title = document.getElementById("serviceTitle")

if(title){

title.innerText = "Staffing Request: " + service

}

}

}



// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
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