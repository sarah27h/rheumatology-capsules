const hamburger = document.querySelector('.header__nav-hamburger');
const navItems = document.querySelector('.header__nav-items');
const headerNav = document.querySelector('.header__nav');
const headerlogo = document.querySelector('.header__logo');

const mq = window.matchMedia('(max-width: 1024px)');

const toggleMobileNav = (e) => {
  if (mq.matches) {
    navItems.classList.toggle('open');
    headerNav.classList.toggle('header__nav--expand');
    headerNav.classList.toggle('header__nav--shrink');
    headerlogo.classList.toggle('header__logo--alignstart');
  }
};

hamburger.addEventListener('click', toggleMobileNav);

headerNav.addEventListener('click', (e) => {
  if (e.target.nodeName.toLowerCase() === 'a') {
    toggleMobileNav();
  }
});
