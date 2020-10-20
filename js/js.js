$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        adaptiveWidth: true,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 2,
        autoPlay: true,
        autoplaySpeed: 1500,
        appendDots:$('.dots_down'),
    });

});