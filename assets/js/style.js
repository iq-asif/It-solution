
// Header start
$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50){
      $(".navbar").addClass("header-active");
    } else {
      $(".navbar").removeClass("header-active");
    }
  });
});
// Header end

// mail slider start
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    navigator:false,
    showpagination:false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// mail slider end

// service slider start
var swiper = new Swiper(".ourServices", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    loop:false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      '320': {
        slidesPerView: 1,
        spaceBetween: 10,},
      
      '640': {
        slidesPerView: 2,
        spaceBetween: 25,},  
      '1024': {
        slidesPerView: 4,
        spaceBetween: 30,
      }
      
    }
  });
// service slider end

AOS.init();

// testimonial start
var swiper = new Swiper(".testimonial", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      '320': {
        slidesPerView: 1,
        spaceBetween: 10,},
      
      '640': {
        slidesPerView: 2,
        spaceBetween: 25,},  
      '1024': {
        slidesPerView: 2,
        spaceBetween: 30,
      }
      
    }
  });
// testimonial end

// counter start
$.fn.jQuerySimpleCounter = function ( options ){
  var settings = $.extend({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 400,    
    complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, { 
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);  
  },
  complete: settings.complete
  });
};

$('#number1').jQuerySimpleCounter({end: 150,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 20,duration: 2000});
$('#number3').jQuerySimpleCounter({end: 12,duration: 1800});
$('#number4').jQuerySimpleCounter({end: 15,duration: 1500});
// counter end