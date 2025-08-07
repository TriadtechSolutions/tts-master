/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {

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

})(Drupal);
