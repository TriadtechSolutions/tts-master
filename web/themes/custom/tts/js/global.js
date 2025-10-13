/**
 * @file
 * Global utilities.
 */
(function ($, Drupal, once) {

  'use strict';

  // ✅ Close mobile menu
  Drupal.behaviors.tts = {
    attach: function (context) {
      once('ttsCloseMenu', '#CollapsingNavbar', context).forEach(() => {
        const $menu = $('#CollapsingNavbar');
        $('.close-menu-btn').on('click', function () {
          if (window.innerWidth <= 1024) {
            $menu.removeClass('show');
          }
        });
      });
    }
  };

  // ✅ General swiper
  Drupal.behaviors.swiperInit = {
    attach: function () {
      once('mainSwiper', '.swiper-container').forEach(() => {
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
            delay: 3500,
            disableOnInteraction: false,
          },
          breakpoints: {
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
          }
        });
      });
    }
  };

  // ✅ Testimonials slider (mobile only)
  Drupal.behaviors.mobileTestimonialsSwiper = {
    attach: function (context) {
      once('mobileTestimonialSwiper', '.testimonials-grid', context).forEach(($grid) => {
        
        let swiperInstance = null;
        const $gridEl = $($grid);

        function initSwiper() {
          const width = window.innerWidth;

          if (width < 768 && !swiperInstance) {
            $gridEl.addClass('swiper-container');
            $gridEl.find('.testimonial-card').addClass('swiper-slide');

            if (!$gridEl.find('.swiper-wrapper').length) {
              $gridEl.wrapInner('<div class="swiper-wrapper"></div>');
            }

            swiperInstance = new Swiper('.testimonials-grid.swiper-container', {
              loop: true,
              slidesPerView: 1,
              spaceBetween: 150,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
              speed: 600,
            });
          }

          else if (width >= 768 && swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;

            const $wrapper = $gridEl.find('.swiper-wrapper');
            if ($wrapper.length) {
              $wrapper.children().removeClass('swiper-slide').unwrap();
            }
            $gridEl.removeClass('swiper-container swiper-initialized');
          }
        }

        initSwiper();

        let resizeTimer;
        $(window).on('resize', function () {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(initSwiper, 300);
        });
      });
    }
  };

  // ✅ Dynamic card colors
  Drupal.behaviors.cardColors = {
    attach: function () {
      once('addCardColors', '.pricing-card, .seo-package-card').forEach((el, index) => {
        const classes = ["card-blue", "card-orange", "card-red", "card-green", "card-purple"];
        $(el).addClass(classes[index % classes.length]);
      });
    }
  };

  // ✅ Mobile dropdown menu
  Drupal.behaviors.customDropdown = {
    attach: function (context) {
      // Open/close toggle
      once('customDropdown', '.nav-item:has(.dropdown-menu)', context).forEach((el) => {
        $(el).on('click', function (e) {
          if (window.innerWidth <= 992) {
            const $parent = $(this).closest('.nav-item');
            $parent.toggleClass('open');
            $('.nav-item.open').not($parent).removeClass('open');
          }
        });
      });

      // Click outside to close
      once('customDropdownOutside', 'body', context).forEach(() => {
        $(document).on('click', function (e) {
          if (!$(e.target).closest('.nav-item').length) {
            $('.nav-item.open').removeClass('open');
          }
        });
      });
    }
  };

})(jQuery, Drupal, once);
