let AlertShow = false;

setInterval(() => {
  document.title = AlertShow
    ? 'Welcom to health community'
    : 'You are safe here..';

  AlertShow = !AlertShow;
}, 2000);

const menuHamburger = document.querySelector('.menu-humberger');
const navLinks = document.querySelector('.nav-links');
const closeTage = document.querySelector('.closeHumberger');

document.querySelectorAll('.Golinks').forEach((element) => element.addEventListener('click', () => {
  navLinks.classList.remove('mobile-menu');
  menuHamburger.style.display = 'block';
}));

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
  menuHamburger.style.display = 'none';
  navLinks.style.position = 'relative';
  navLinks.style.backdropFilter = 'blur(1000px)';
});

closeTage.addEventListener('click', () => {
  navLinks.classList.remove('mobile-menu');
  menuHamburger.style.display = 'block';
  navLinks.style.position = 'absolute';
  navLinks.style.backdropFilter = 'blur(1000px)';
});
