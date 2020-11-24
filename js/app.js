/**
 * @name modApp
 * @version 0.0.1
 * @author @DevKhris */

const sites = document.querySelectorAll("ul li a");

for (let site of sites) {
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