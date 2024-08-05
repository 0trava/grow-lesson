import Swiper, { Mousewheel } from 'swiper';
Swiper.use([Mousewheel]);

const swiper = new Swiper('.swiper', {
      direction: 'vertical',
      speed: 1700,
      parallax: true,
      mousewheel: {
        invert: false, // Измените это значение, если необходимо
        releaseOnEdges: true, // Параметр для активации прокрутки на краях
      },
      allowTouchMove: true,
  });

  swiper.on('slideChange', function() {
   document.querySelectorAll('.header-content__slide').forEach(function(e, i) {
         return swiper.activeIndex === i ? e.classList.add('active') : e.classList.remove('active')
   })
  })

  swiper.on('init', function () {
      console.log('Swiper initialized');
    });
    
    swiper.on('slideChange', function () {
      console.log('Slide changed');
    });