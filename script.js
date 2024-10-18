
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const navLinks = document.getElementById("nav-links");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    navLinks.addEventListener("mouseover", (e) => {
        if (e.target.tagName === 'A') {
            e.target.style.color = '#007BFF'; 
        }
    });

    navLinks.addEventListener("mouseout", (e) => {
        if (e.target.tagName === 'A') {
            e.target.style.color = ''; 
        }
    });
});