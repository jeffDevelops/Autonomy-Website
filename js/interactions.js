var nav = document.querySelector('.navigation');
var body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 650 || window.innerWidth < 678) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }

    if (window.pageYOffset < 500 && window.innerWidth < 678) {
      nav.classList.remove('scroll');
    }
  });
});