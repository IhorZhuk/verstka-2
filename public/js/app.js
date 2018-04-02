'use strict';

var initPageSlider = function initPageSlider() {

  var $slider = $('.js-page-slider');

  $slider.slick({
    arrows: false,
    vertical: true
  });

  $slider.mousewheel(function (e) {
    e.preventDefault();
    if (e.deltaY < 0) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });

  $slider.swipe({
    swipe: function swipe(e, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'up') {
        $slider.slick('slickNext');
      } else {
        $slider.slick('slickPrev');
      }
    },
    threshold: 50
  });
};

$(document).ready(function () {
  initPageSlider();
});