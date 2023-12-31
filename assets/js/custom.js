(function ($) {
  "use strict"; // Start of use strict


  /*======== Preloder ============*/
  $.fakeLoader({
    bgColor: '#fff',
    spinner:"spinner1"
  });

  // Dropdown Menu Script Start

  $('#mainNav ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
  });
  // Dropdown Menu Script End

  // mobile Menu area
  $('nav.mobile_menu').meanmenu({
    meanScreenWidth: '991'
  });
  $('nav.mean-nav li > a:first-child').on('click', function () {
    $('a.meanmenu-reveal').click();
  });
  // mobile Menu area

  // coming count down clock
  var countDown =  $('#event-count');
  if(countDown.length){
    countDown.countDown({
      targetDate: {
        'day'   : 28,
        'month' : 11,
        'year'  : 2023,
        'hour'  : 23,
        'min'   : 59,
        'sec'   : 59
      },
      omitWeeks: true
    });
  }
  // comming count down clock

  //Friends Says Slider
  var friends_slide = $('.friends-says-slider');
  friends_slide.owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    dots:true,
    nav:false,
    smartSpeed: 1e3,
    autoplayTimeout: 8e3,
    autoplaySpeed: 1e3,
    autoplayHoverPause: !0,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      992:{
        items:1
      }
    }
  });
  $('.friends_slide_nav .testi_next').on('click', function() {
    friends_slide.trigger('next.owl.carousel');
  });

  $('.friends_slide_nav .testi_prev').on('click', function() {
    friends_slide.trigger('prev.owl.carousel');
  });
  //Friends Says Slider

  //Partners Logo Slider
  var planners_slide = $('.planners-slider');
  planners_slide.owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    dots:false,
    nav:false,
    smartSpeed: 1e3,
    autoplayTimeout: 8e3,
    autoplaySpeed: 1e3,
    autoplayHoverPause: !0,
    responsive:{
      0:{
        items:2
      },
      600:{
        items:4
      },
      992:{
        items:6
      }
    }
  });
  //Partners Logo Slider

  // Veno Box
  $('.venobox').venobox();

  //Wedding Events Area Slider
  var wedding_slide = $('.wedding-events-slider');
  wedding_slide.owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    dots:false,
    nav:false,
    center: true,
    smartSpeed: 1e3,
    autoplayTimeout: 8e3,
    autoplaySpeed: 1e3,
    autoplayHoverPause: !0,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      992:{
        items:3
      }
    }
  });
  $('.wedding_slide_nav .testi_next').on('click', function() {
    wedding_slide.trigger('next.owl.carousel');
  });

  $('.wedding_slide_nav .testi_prev').on('click', function() {
    wedding_slide.trigger('prev.owl.carousel');
  });
  //Wedding Events Area Slider

  // Initialize WOW JS
  new WOW().init();

})(jQuery); // End of use strict

/*-----------------------*/

TweenLite.set("#rose",{perspective:600})
TweenLite.set("img",{xPercent:"0%",yPercent:"0%"})

var total = 30;
var warp = document.getElementById("rose"), w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-80,-150),z:R(-200,200)});
   warp.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};


// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW