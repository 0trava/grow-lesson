const swiper = new Swiper('.swiper', {
      direction: 'vertical',
      speed: 1700,
      parallax: true,
      scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
      },
      mousewheel: {
          invert: false,
      },
      // Убедитесь, что touch управление включено
      touch: {
          enabled: true,
      },
  });

  swiper.on('slideChange', function() {
   document.querySelectorAll('.header-content__slide').forEach(function(e, i) {
         return swiper.activeIndex === i ? e.classList.add('active') : e.classList.remove('active')
   })
  });

  swiper.on('init', function () {
      console.log('Swiper initialized');
    });
    
    swiper.on('slideChange', function () {
      console.log('Slide changed');
    });