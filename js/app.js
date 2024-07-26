const swiper = new Swiper('.swiper', {
     mousewheel: true,
     direction: 'vertical',
     speed: 1700,
     parallax: true

  });

  swiper.on('slideChange', function() {
   document.querySelectorAll('.header-content__slide').forEach(function(e, i) {
         return swiper.activeIndex === i ? e.classList.add('active') : e.classList.remove('active')
   })
  })