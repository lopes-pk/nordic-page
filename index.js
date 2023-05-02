var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints:{
    0: {
      slidesPerView: 1
    },
    654:{
      slidesPerView: 2
    },

    976:{
      slidesPerView:3
    }
  }
}); 




