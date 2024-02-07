'use strict';

$(() => {
  const bannerSlider = $('.banner__slider');
  if (bannerSlider.length > 0) {
    bannerSlider.slick({ arrows: true, dots: true });
  }

  const bannerSliderAr = $('.banner__slider--ar');
  if (bannerSliderAr.length > 0) {
    bannerSliderAr.slick({ arrows: true, dots: true, rtl: true });
  }

  const topEventsSlider = $('.top__events--slider');
  if (topEventsSlider.length > 0) {
    topEventsSlider.slick({
      arrows: false,
      dots: true,
    });
  }

  const topEventsSliderAr = $('.top__events--slider-ar');
  if (topEventsSliderAr.length > 0) {
    topEventsSliderAr.slick({
      arrows: false,
      dots: true,
      rtl: true,
    });
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $('.navbar').addClass('nav__active');
    } else {
      $('.navbar').removeClass('nav__active');
    }
  });

  const toggleBtnData = $('.moreless__button');
  if (toggleBtnData.length > 0) {
    $('.moreless__button').click(function () {
      $('.moretext').slideToggle();
      if ($('.moreless__button').text() == 'read more') {
        $(this).text('read less');
      } else {
        $(this).text('read more');
      }
    });
  }

  const minusBtnData = $('.minus');

  if (minusBtnData.length > 0) {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
  }

  const plusBtnData = $('.plus');

  if (plusBtnData.length > 0) {
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  }
});
