/**
 * @name modApp
 * @version 0.0.1
 * @author @DevKhris
 */

//
// Smooth scrolling functions
// 
const places = document.querySelectorAll("ul li a");

for (let place of places) {
    site.addEventListener("click", smoothScrolling);
}

function smoothScrolling(e) {
    e.preventDefault();
    let href = this.getAttribute("href");
    console.log(href);
    document
        .querySelector(href)
        .scrollIntoView({ behavior: "smooth", alignToTop: true });
}

//
// Scroll to top functions
// 
var topButton = document.getElementById("scrollTopBtn");
var rootElement = document.documentElement;

topButton.addEventListener("click",topFunction);

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}