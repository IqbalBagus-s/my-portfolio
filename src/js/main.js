// Get required elements
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  if (navMenu.classList.contains('left-[-100%]')) {
    navMenu.classList.remove('left-[-100%]');
    navMenu.classList.add('left-0');
    hamburger.classList.remove('ri-menu-3-line');
    hamburger.classList.add('ri-close-line');
  } else {
    navMenu.classList.remove('left-0');
    navMenu.classList.add('left-[-100%]');
    hamburger.classList.remove('ri-close-line');
    hamburger.classList.add('ri-menu-3-line');
  }
});

// Handle smooth scrolling and mobile menu closing
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });

    if (navMenu.classList.contains('left-0')) {
      navMenu.classList.remove('left-0');
      navMenu.classList.add('left-[-100%]');
      hamburger.classList.remove('ri-close-line');
      hamburger.classList.add('ri-menu-3-line');
    }
  });
});

// Visibility toggle function
function toggleVisibility() {
    const homeElements = document.querySelectorAll('.home__img__data');
    const aboutElements = document.querySelectorAll('.about__img__data');
    const screenWidth = window.innerWidth;
    
    homeElements.forEach(element => {
        if (screenWidth >= 540) { // md, lg, xl
            element.style.visibility = 'hidden';
        } else {
            element.style.visibility = 'visible';
        }
    });
    
    aboutElements.forEach(element => {
        if (screenWidth >= 540) { // md, lg, xl
            element.style.visibility = 'hidden';
        } else {
            element.style.visibility = 'visible';
        }
    });
}

// Run on page load and window resize
window.addEventListener('load', toggleVisibility);
window.addEventListener('resize', toggleVisibility);

// ScrollReveal Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

// Home Section
sr.reveal('.home__data', {origin: 'bottom'});
sr.reveal('.home__img__data', {origin: 'bottom', delay: 600});
sr.reveal('.home__social', {origin: 'left', delay: 800});

// About Section
sr.reveal('.about__data', {origin: 'left'});
sr.reveal('.about__img__data', {origin: 'right', delay: 600});

// Resume Section
sr.reveal('.resume__data', {origin: 'bottom'});
sr.reveal('.card__items', {
    origin: 'bottom',
    interval: 100,
    distance: '20px',
    duration: 1800
});

// Portfolio Section
sr.reveal('.portfolio__data', {origin: 'bottom'});
sr.reveal('.card__items', {
    origin: 'bottom',
    interval: 100,
    distance: '20px',
    duration: 1800
});
