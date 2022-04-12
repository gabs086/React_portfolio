import React from 'react';
import $ from 'jquery';
import '../libs/easing.js';

function BackToTop() {
  React.useEffect(() => {
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        document.querySelector('.back-to-top').classList.remove('fadeOut');
        document.querySelector('.back-to-top').style.display = 'block';
        document.querySelector('.back-to-top').classList.add('fadeIn');
      } else {
        document.querySelector('.back-to-top').classList.remove('fadeIn');
        document.querySelector('.back-to-top').classList.add('fadeOut');
      }
    });
  }, []);

  return (
    <span className='back-to-top animated'>
      <i className='fa fa-chevron-up'></i>
    </span>
  );
}

export default BackToTop;
