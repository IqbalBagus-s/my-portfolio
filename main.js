// toogle button
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    // Ubah ikon hamburger
    if (hamburger.classList.contains("ri-menu-3-line")) {
        hamburger.classList.remove("ri-menu-3-line");
        hamburger.classList.add("ri-close-line");
    } else {
        hamburger.classList.remove("ri-close-line");
        hamburger.classList.add("ri-menu-3-line");
    }
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        // Ubah ikon hamburger
        if (hamburger.classList.contains("ri-menu-3-line")) {
            hamburger.classList.remove("ri-menu-3-line");
            hamburger.classList.add("ri-close-line");
        } else {
            hamburger.classList.remove("ri-close-line");
            hamburger.classList.add("ri-menu-3-line");
        }
    });
});

// show scroll up

// change bg header
