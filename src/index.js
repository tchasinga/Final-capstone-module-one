const backCome = 'Relation Community';

let AlertShow = false;

setInterval(() => {
  document.title = AlertShow
    ? 'Welcom to my Capstone'
    : 'Hi there || is Tchasinga';

  AlertShow = !AlertShow;
}, 2000);

const Changer = document.querySelector('.RelationCode');

Changer.addEventListener('mouseover', () => {
  Changer.innerHTML = 'Be Connected with us in our World..!!';
  Changer.style.cursor = 'pointer';
  Changer.style.transition = 'all 0.4s ease-out';
});

Changer.addEventListener('mouseout', () => {
  Changer.innerHTML = backCome;
});

const Changer2 = document.querySelector('.textTag');

const textLoad = () => {
  setTimeout(() => {
    Changer2.innerHTML = 'Hi there, Welcom';
  }, 0);

  setTimeout(() => {
    Changer2.innerHTML = 'WOLRD HEALTH COMMUNITY OF THE GLOBAL 2023';
  }, 8000);

  setTimeout(() => {
    Changer2.innerHTML = 'Keep your Health and Life safe !!';
  }, 6000);

  setTimeout(() => {
    Changer2.innerHTML = 'We are here to help you';
  }, 5000);
};
textLoad();
setInterval(textLoad, 20000);

const menuHamburger = document.querySelector('.menu-humberger');
const navLinks = document.querySelector('.nav-links');
const closeTage = document.querySelector('.closeHumberger');
const showOff = document.querySelector('.secondGrid');

document.querySelectorAll('.Golinks').forEach((element) => element.addEventListener('click', () => {
  navLinks.classList.remove('mobile-menu');
  menuHamburger.style.display = 'block';
}));

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
  menuHamburger.style.display = 'none';
  showOff.style.display = 'none';
});

closeTage.addEventListener('click', () => {
  navLinks.classList.remove('mobile-menu');
  menuHamburger.style.display = 'block';
  showOff.style.display = 'block';
});

// eslint-disable-next-line no-undef
const ViewScroll = ScrollReveal({
  distance: '50px',
  duration: 2500,
  reset: true,
});

ViewScroll.reveal('.gridOne', { delay: 340, origin: 'left' });
ViewScroll.reveal('.gridContainer', { delay: 340, origin: 'left' });
ViewScroll.reveal('.firstSection', { delay: 350, origin: 'left' });
ViewScroll.reveal('.secondSection', { delay: 350, origin: 'left' });
ViewScroll.reveal('.thirdSection', { delay: 350, origin: 'left' });
ViewScroll.reveal('.fourthSection', { delay: 350, origin: 'left' });
ViewScroll.reveal('.footing', { delay: 350, origin: 'left' });
ViewScroll.reveal('.newAbout', { delay: 350, origin: 'left' });
