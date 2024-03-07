// Global variables
const hamburger = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-times');
const sidebar = document.querySelector('.nav-menu');
const header = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.menu li a');
const currentYear = document.getElementById('currentYear');

// Menu icon toggler
hamburger.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});

closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && e.target !== hamburger) {
    sidebar.classList.remove('show-sidebar');
  }
});


//Header scoll effects starts
window.addEventListener('scroll', () => {
  const header = document.querySelector('.navbar');
  const hamburger = document.querySelector('.fa-bars');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 600) {
    header.classList.add('navbar-scroll');
    header.classList.remove('transparent');
  } else {
    header.classList.remove('navbar-scroll');
    header.classList.add('transparent');
  }
});

//Header scoll effects ends

//Testimonial carousel starts
const testimonialsContainer = $('.testimonials-container');

testimonialsContainer.owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  margin: 10,
  nav: true,
  navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 1,
      nav: true
    },
    768: {
      items: 2
    }
  }
});

testimonialsContainer.on('mouseover', function () {
  testimonialsContainer.trigger('stop.owl.autoplay');
});

testimonialsContainer.on('mouseout', function () {
  testimonialsContainer.trigger('play.owl.autoplay');
});

//Testimonial carousel ends

//Dynamic date
currentYear.textContent = new Date().getFullYear();

