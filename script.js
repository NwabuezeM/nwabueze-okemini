const hamburger = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-times');
const sidebar = document.querySelector('.nav-menu');
const header = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.menu li a');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

document.addEventListener('click', (e) => {
  if (e.target !== sidebar && e.target !== hamburger) {
    sidebar.classList.remove('show-sidebar');
  }
});

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

  