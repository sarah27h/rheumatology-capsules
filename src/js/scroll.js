const scrollToTopBtn = document.getElementById('js-top');

/**
 * @description scroll to the top of the page
 */

const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  scrollToTopBtn.classList.add('hide');
};

scrollToTopBtn.addEventListener('click', scrollToTop);

/**
 * @description shows the scrollToTopBtn btn
 * if the user scrolls beyond the height of the initial window
 */
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 580) {
    scrollToTopBtn.className = 'scroll-top-btn v-show';
  } else {
    scrollToTopBtn.className = 'scroll-top-btn v-hide';
  }
};

window.addEventListener('scroll', scrollFunc);
