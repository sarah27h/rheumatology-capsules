// const postsBtn = document.querySelector('.posts__btn');
const posts = document.getElementsByClassName('post');
console.log(posts);
let hideNum = 0;

const showMore = () => {
  hideNum = 0;
  for (let i = 4; i < posts.length; i++) {
    hideNum++;
    if (posts[i].classList.contains('hide')) {
      posts[i].classList.remove('hide');
      console.log(hideNum);
      if (hideNum === 3) break;
    }
  }
};

// postsBtn.addEventListener('click', showMore);

// Array.from(posts).forEach((post) => {
//   if (post.classList.contains('hide')) {
//     post.classList.remove('hide');
//   }
// });
