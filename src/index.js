const backCome = 'Relation Community';

let AlertShow = false;

setInterval(() => {
  document.title = AlertShow
    ? 'Welcom to health community'
    : 'You are safe here..';

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
    this.style.transition = 'all 0.3s ease-in';
  }, 0);

  setTimeout(() => {
    Changer2.innerHTML = 'WOLRD HEALTH COMMUNITY OF THE GLOBAL 2023';
    this.style.transition = 'all 0.3s ease-in';
  }, 8000);

  setTimeout(() => {
    Changer2.innerHTML = 'Keep your Health and Life safe !!';
    this.style.transition = 'all 0.3s ease-in';
  }, 6000);

  setTimeout(() => {
    Changer2.innerHTML = 'We are here to help you';
    this.style.transition = 'all 0.3s ease-in';
  }, 5000);
};
textLoad();
setInterval(textLoad, 20000);

const menuHamburger = document.querySelector('.menu-humberger');
const navLinks = document.querySelector('.nav-links');
const closeTage = document.querySelector('.closeHumberger');
const showOff = document.querySelector('.secondGrid');
const OffMsg = document.querySelector('.firstGrid');
const OffMsg2 = document.querySelector('.newtons-cradle');

document.querySelectorAll('.Golinks').forEach((element) => element.addEventListener('click', () => {
  navLinks.classList.remove('mobile-menu');
  menuHamburger.style.display = 'block';
}));

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
  menuHamburger.style.display = 'none';
  showOff.style.display = 'none';
  OffMsg.style.display = 'none';
  OffMsg2.style.display = 'none';
  this.style.transition = 'all 0.3s ease-in';
});

closeTage.addEventListener('click', () => {
  navLinks.classList.remove('mobile-menu');
  menuHamburger.style.display = 'block';
  showOff.style.display = 'block';
  OffMsg.style.display = 'block';
  OffMsg2.style.display = 'flex';
  this.style.transition = 'all 0.3s ease-in';
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
