jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


$('.test-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'.next',
    prevArrow:'.prev',
  });