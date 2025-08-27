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


})(jQuery,Drupal);