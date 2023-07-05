import './css/null.css';
import 'swiper/css/bundle';
import './css/style.css';
import './fonts/fonts.css';
import Swiper from 'swiper/bundle';
import './js/mymodal.js';
import './js/burger-menu.js';
import './css/style-media-calc.css'

// init Swiper:
const swiper = new Swiper('.swiper', {
    // loop: true,
    // autoplay:true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });  

