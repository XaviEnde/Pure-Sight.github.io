const menuButton = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const hero = document.getElementById("hero");
const clientCard1 = document.querySelector(".client-experience__card1")
const clientCard2 = document.querySelector(".client-experience__card2")


menuButton.addEventListener("click", toggleMenu)
hero.addEventListener("click", removeMenu)
clientCard1.addEventListener("click", openReview)
clientCard2.addEventListener("click", openReview)

function toggleMenu(){
    navLinks.classList.toggle("linksMenu")
}
function removeMenu(){
    navLinks.classList.remove("linksMenu")
}

function openReview(){
    window.open("https://www.google.nl/search?sa=X&sca_esv=49a7afc3c270ff6b&tbm=lcl&sxsrf=ADLYWIJE4f75u_hMe2hRXzqrmlXa8azWPw:1718084318259&q=Sanders+Optiek+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY1MDCzsDAxMjY3NrKwNDE2Nt7AyPiKUSw4MS8ltahYwb-gJDM1WyEotSwztbx4ESsOCQBQlWKbTQAAAA&rldimm=13500688423732894333&hl=nl-NL&ved=2ahUKEwicp-_r6tKGAxWL87sIHZyzCxMQ9fQKegQIGBAF&biw=767&bih=695&dpr=1.25#lkt=LocalPoiReviews")
}
































