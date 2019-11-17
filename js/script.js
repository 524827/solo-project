//  Preloader
$( () => {
  $("#preloader")
    .delay(2000)
    .fadeOut();
});

/**
 * Animation
 */
$(()=> {
  new WOW().init();
});

/**
 * Show and hide white navigation
 */
$(()=> {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");
      $(".navbar-brand").addClass("navbar-brand-black");
      $(".navbar-toggler").removeClass("icon-color");
    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-toggler").addClass("icon-color");
      $(".navbar-brand").removeClass("navbar-brand-black");
    }
  });
});

