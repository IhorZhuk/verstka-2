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

var initWorkSlider = function initWorkSlider() {
  var $wrapper = $('.js-work-slider'),
      $slide1 = $wrapper.find('.js-slide-1').html(),
      $slide2 = $wrapper.find('.js-slide-2').html(),
      $slide3 = $wrapper.find('.js-slide-3').html();

  $wrapper.html(' ');

  $('<div>').appendTo($wrapper).append($slide1).append($slide2).append($slide3);
  $('<div>').appendTo($wrapper).append($slide2).append($slide3).append($slide1);
  $('<div>').appendTo($wrapper).append($slide3).append($slide1).append($slide2);

  $('.js-work-slider').slick({
    fade: true,
    prevArrow: '<span class="work-arrow is-prev">\n                  <img src="img/arrow-left.svg" width="18" height="14">\n                </span>',
    nextArrow: '<span class="work-arrow is-next">\n                  <img src="img/arrow-right.svg" width="18" height="14">\n                </span>'
  });
};

$(document).ready(function () {
  initPageSlider();
  initWorkSlider();
});