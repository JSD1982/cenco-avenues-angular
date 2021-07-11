
$(document).ready(function(){

  $('.thumbnail-seccion-container__action-buttons').click(function(){
    $('.nav-content').addClass('stickyNav')
    $('.home-nav').removeClass('active-nav')
    $('.sticky-nav').addClass('active-nav')
  })

  if ( $("#navStickyId").length ) {
    $('.nav-content').addClass('stickyNav')
    $('.home-nav').removeClass('active-nav')
    $('.sticky-nav').addClass('active-nav')
  }
  
  $('.hero-content__lenguage a.pt').click(function(){
    $('a').removeClass('active')
    $(this).addClass('active')
    $('.thumbnail-seccion-container .content-mask').removeClass('es')
    $('.thumbnail-seccion-container .content-mask').addClass('pt')
  })  
  $('.hero-content__lenguage a.es').click(function(){
    $('a').removeClass('active')
    $(this).addClass('active')
    $('.thumbnail-seccion-container .content-mask').removeClass('pt')
    $('.thumbnail-seccion-container .content-mask').addClass('es')
  })  


  $('button.ver-mas.a1').click(function(){
    $('.content-ver-mas.a1').fadeIn()
    $('.background-outside').fadeIn()
  })
  $('button.ver-mas.a2').click(function(){
    $('.content-ver-mas.a2').fadeIn()
    $('.background-outside').fadeIn()
  })
  $('button.ver-mas.a3').click(function(){
    $('.content-ver-mas.a3').fadeIn()
    $('.background-outside').fadeIn()
  })
  $('button.ver-mas.a4').click(function(){
    $('.content-ver-mas.a4').fadeIn()
    $('.background-outside').fadeIn()
  })
  $('button.ver-mas.a5').click(function(){
    $('.content-ver-mas.a5').fadeIn()
    $('.background-outside').fadeIn()
  })
  $('button.ver-mas.a6').click(function(){
    $('.content-ver-mas.a6').fadeIn()
    $('.background-outside').fadeIn()
  })
  $('.background-outside').click(function(){
    $('.content-ver-mas').fadeOut()
    $(this).fadeOut()
  })
  
})


function onInit() {
 
  var userLang = navigator.language || navigator.userLanguage; 
   if(userLang === 'pt'){
    $('.hero-content__lenguage a.pt').addClass('active')
    $('.thumbnail-seccion-container .content-mask').removeClass('es')
    $('.thumbnail-seccion-container .content-mask').addClass('pt')
   }else{
    $('.hero-content__lenguage a.es').addClass('active')
    $('.thumbnail-seccion-container .content-mask').removeClass('pt')
    $('.thumbnail-seccion-container .content-mask').addClass('es')
   }

  //scroll smooth
  const links = document.querySelectorAll(".scroll-smooth");
  
  
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
    });
  }
  //scroll smooth


  //scroll position conditional
  window.addEventListener("scroll", function (e) {

    let header = document.getElementById("myHeader");
    let arrow = document.getElementById("arrow");
    let scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
      
    if (scrollPosition > 1200) {
      header.classList.add("sticky");
     
    } else {
      header.classList.remove("sticky");

    }
    if (scrollPosition > 200) {
      arrow.classList.add("arrow-active");
    } else {
      arrow.classList.remove("arrow-active");
    }
    // if (scrollPosition < 1200) {
    //   btns.classList.remove("menuActive");
    // }

    if (scrollPosition < 1300) { $('.scroll-smooth').removeClass('active') }
    //scroll position conditional


   // Animate section
var scroll = window.requestAnimationFrame ||
function(callback){ window.setTimeout(callback, 1000/60)};
var animateLeftBounce = document.querySelectorAll('.align-left'); 
var animateRightBounce = document.querySelectorAll('.align-right'); 
var animateFadeIn = document.querySelectorAll('.animateFadeIn'); 
var animateFadeUp = document.querySelectorAll('.animateFadeUp'); 
var animateLeftBounce = document.querySelectorAll('.align-left'); 
var animateRightBounce = document.querySelectorAll('.align-right'); 
var animateFadeInRight = document.querySelectorAll('.animateFadeInRight'); 
var animateFadeInLeft = document.querySelectorAll('.animateFadeInLeft'); 
var animaterubberBand = document.querySelectorAll('.animaterubberBand');
var animateZoomIn = document.querySelectorAll('.animateZoomIn');

function loop() {
   Array.prototype.forEach.call(animateLeftBounce, function(el1){
     if (isElementInViewport(el1)) {
       el1.classList.add('animate__bounceInLeft');
     } else {
       el1.classList.remove('animate__bounceInLeft');
     }
   });
   Array.prototype.forEach.call(animateRightBounce, function(el2){
    if (isElementInViewport(el2)) {
      el2.classList.add('animate__bounceInRight');
    } else {
      el2.classList.remove('animate__bounceInRight');
    }
  });
  Array.prototype.forEach.call(animateFadeIn, function(el3){
    if (isElementInViewport(el3)) {
      el3.classList.add('animate__fadeIn');
    } else {
      el3.classList.remove('animate__fadeIn');
    }
  });
  Array.prototype.forEach.call(animateFadeUp, function(el4){
   if (isElementInViewport(el4)) {
    el4.classList.add('animate__fadeInUp');
   } else {
    el4.classList.remove('animate__fadeInUp');
   }
 });
 Array.prototype.forEach.call(animateFadeInRight, function(el5){
  if (isElementInViewport(el5)) {
    el5.classList.add('animate__fadeInRight');
  } else {
    el5.classList.remove('animate__fadeInRight');
  }
});
Array.prototype.forEach.call(animateFadeInLeft, function(el6){
  if (isElementInViewport(el6)) {
    el6.classList.add('animate__fadeInLeft');
  } else {
    el6.classList.remove('animate__fadeInLeft');
  }
});
Array.prototype.forEach.call(animaterubberBand, function(el7){
  if (isElementInViewport(el7)) {
    el7.classList.add('animate__rubberBand');
  } else {
    el7.classList.remove('animate__rubberBand');
  }
});
Array.prototype.forEach.call(animateZoomIn, function(el18){
  if (isElementInViewport(el18)) {
    el18.classList.add('animate__zoomIn');
  } else {
    el18.classList.remove('animate__zoomIn');
  }
});


  scroll(loop);
}
loop();

    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
    // Animate sectionl
    
    var scrollDistance = $(window).scrollTop();
    
    $('.thumbnail-seccion-container__action-buttons').click(function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.thumbnail-seccion-container').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        
        $('.nav-content a.lk.active').removeClass('active');
        $('.nav-content a.lk').eq(i).addClass('active');
      }
    });

  }, true)
}



  




