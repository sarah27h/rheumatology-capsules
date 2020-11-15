const morePostsBtn = document.querySelector('.posts__btn-more');
const lessPostsBtn = document.querySelector('.posts__btn-less');
const posts = document.getElementsByClassName('previous-post');
console.log(posts);

const showMore = () => {
  let hideNum = 0;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].classList.contains('hide')) {
      hideNum++;
      posts[i].classList.remove('hide');
      posts[i].classList.add('show');
      console.log(hideNum);
      if (hideNum === 3) break;
    }
    if (i === posts.length - 1) {
      morePostsBtn.classList.add('hide');
    }
    lessPostsBtn.classList.remove('hide');
  }
};

const showLess = () => {
  for (let i = 3; i < posts.length; i++) {
    posts[i].classList.add('hide');
    posts[i].classList.remove('show');
    morePostsBtn.classList.remove('hide');
    lessPostsBtn.classList.add('hide');
  }
  document.querySelector('.posts__container').scrollIntoView({
    behavior: 'smooth',
  });
};

morePostsBtn.addEventListener('click', showMore);
lessPostsBtn.addEventListener('click', showLess);

// Array.from(posts).forEach((post) => {
//   if (post.classList.contains('hide')) {
//     post.classList.remove('hide');
//   }
// });
