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

$(function() {
  var colors = ["card-blue", "card-orange", "card-red", "card-green", "card-purple"];
  $('.pricing-card, .seo-package-card').each(function(index) {
    var colorClass = colors[index % colors.length];
    $(this).addClass(colorClass);
  });
});


})(jQuery,Drupal);

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.mobileTestimonialSwiper = {
    attach: function (context, settings) {
      const $testimonialContainer = $(".testimonial-swiper", context);

      if ($testimonialContainer.length) {
        const testimonialCount = $testimonialContainer.find(".swiper-slide").length;

        // Mobile only
        if ($(window).width() < 768 && testimonialCount > 1) {
          new Swiper(".testimonial-swiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
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
          });
        }
      }
    }
  };

  Drupal.behaviors.customDropdown = {
    attach: function (context, settings) {
      $(".nav-item .dropdown-arrow", context).once("customDropdown").on("click", function (e) {
        e.preventDefault();
        const parent = $(this).closest(".nav-item");

        if ($(window).width() <= 992) {
          parent.toggleClass("open");

          // Close all other open dropdowns
          $(".nav-item.open").each(function () {
            if (!$(this).is(parent)) {
              $(this).removeClass("open");
            }
          });
        }
      });

      // Close when clicking outside
      $(document).once("customDropdownOutside").on("click", function (e) {
        if ($(e.target).closest(".nav-item").length === 0) {
          $(".nav-item.open").removeClass("open");
        }
      });
    }
  };
})(jQuery, Drupal);

