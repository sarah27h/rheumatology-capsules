const hamburger = document.querySelector('.header__nav-hamburger');
const navItems = document.querySelector('.header__nav-items');
const headerNav = document.querySelector('.header__nav');

const closeMobileNav = (e) => {
  navItems.classList.toggle('open');
  headerNav.classList.toggle('header__nav--expand');
  headerNav.classList.toggle('header__nav--shrink');
};

hamburger.addEventListener('click', closeMobileNav);

headerNav.addEventListener('click', (e) => {
  if (e.target.nodeName.toLowerCase() === 'a') {
    closeMobileNav();
  }
});
