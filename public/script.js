/* ABOUT */

const aboutImage = document.querySelector(".about-intro img");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const imagePosition = aboutImage.offsetTop + aboutImage.clientHeight / 2;
    if (scrollPosition > imagePosition) {
        aboutImage.classList.add("show");
    }
});

const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

