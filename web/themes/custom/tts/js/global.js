/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.tts = {
    attach: function (context, settings) {

      jQuery(document).ready(function ($) {
        const $menu = $('#CollapsingNavbar');
        const $closeBtn = $('.close-menu-btn');

        // Close menu
        $closeBtn.on('click', function () {
          if ($(window).width() <= 1024) {
            $menu.removeClass('show');
          }
        });
      });

    }
  };

  Drupal.behaviors.swiperInit = {
  attach: function (context, settings) {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3500,   // 3 seconds per slide
        disableOnInteraction: false, // keep autoplay even if user clicks
      },
      breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
      },
    });
  }
};

//Slider for Testimonial//
Drupal.behaviors.mobileTestimonialsSwiper = {
    attach: function (context, settings) {
      $(document).ready(function () {
        const $grid = $('.testimonials-grid', context);
        let swiperInstance = null;

        function initSwiper() {
          const windowWidth = $(window).width();
          if (windowWidth < 768 && !swiperInstance) {
            if (!$grid.hasClass('swiper-initialized')) {

              $grid.addClass('swiper-container');
              $grid.find('.testimonial-card').addClass('swiper-slide');

              if (!$grid.find('.swiper-wrapper').length) {
                $grid.wrapInner('<div class="swiper-wrapper"></div>');
              }

              swiperInstance = new Swiper('.testimonials-grid.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 150,
                loop: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                autoplay: {
                  delay: 3000,
                  disableOnInteraction: false,
                },
                speed: 600, // smooth slide speed
              });
            }
          }

          // TABLET & DESKTOP — destroy swiper
          else if (windowWidth >= 768 && swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;

            const $wrapper = $grid.find('.swiper-wrapper');
            if ($wrapper.length) {
              $wrapper.children().removeClass('swiper-slide').unwrap();
            }

            $grid.removeClass('swiper-container swiper-initialized');
          }
        }
        initSwiper();

        let resizeTimer;
        $(window).on('resize', function () {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(initSwiper, 300);
        });
      });
    },
  };

$(function() {
  var colors = ["card-blue", "card-orange", "card-red", "card-green", "card-purple"];
  $('.pricing-card, .seo-package-card').each(function(index) {
    var colorClass = colors[index % colors.length];
    $(this).addClass(colorClass);
  });
});


})(jQuery,Drupal);

