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
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollTop > 600 
    ? (
        header.classList.toggle("navbar-scroll"),
        header.classList.remove("transparent"),
        hamburger.classList.add("hamburger-scroll"),
        menuLinks.forEach( (link => link.style.color='gray')),
        hamburger.classList.remove("hamburger-unscrolled")
      )
    : (
        header.classList.remove("navbar-scroll"),
        header.classList.add("transparent"),
        hamburger.classList.remove("hamburger-scroll"),
        hamburger.classList.add("hamburger-unscrolled"),
        menuLinks.forEach( (link => link.style.color='#ffffff'))
      );
});