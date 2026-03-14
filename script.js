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