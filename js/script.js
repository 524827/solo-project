//  Preloader
$(function() {
  $("#preloader")
    .delay(2000)
    .fadeOut();
});

$(function () {
  new WOW().init();
});

/**
 * Team members
 */
$(function() {
  $(".owl-carousel").owlCarousel({
    items: 2,
    autoplay: true,
    smartspeed: 500,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>'
    ]
  });
});

// progress
$("#progress-elements").waypoint(
  function() {
    $(".progress-bar").each(function() {
      $(this).animate(
        {
          width: $(this).attr("aria-valuenow") + "%"
        },
        500
      );
    });
    this.destroy();
  },
  {
    offset: "bottom-in-view"
  }
);

// Responsive Tabs for services
$(function() {
  $("#services-tabs").responsiveTabs({
    animation: "slide"
  });
});

// Portfolio
$(window).on("load", function() {
  mixitup(".mixitup-container", {
    controls: {
      toggleDefault: "none"
    }
  });
});

// remove default active
$(function() {
  $("#mixitup-filters").on("click", function() {
    console.log("hiii");
    $("#mixitup-filters")
      .find(".active")
      .removeClass("active");
  });
});

// Magnifier

$(function() {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});

/**
 * Testimonial
 */
$("#testimonial-slider").owlCarousel({
  items: 1,
  autoplay: false,
  smartspeed: 700,
  loop: true,
  autoplayHoverPause: true,
  nav: true,
  dots: false,
  navText: [
    '<i class="fas fa-angle-left"></i>',
    '<i class="fas fa-angle-right"></i>'
  ]
});

$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });
});

/**
 * Testimonial
 */

$("#client-list").owlCarousel({
  items: 6,
  autoplay: false,
  smartspeed: 700,
  loop: true,
  autoplayHoverPause: true,
  nav: true,
  dots: false,
  navText: [
    '<i class="fas fa-angle-left"></i>',
    '<i class="fas fa-angle-right"></i>'
  ]
});

/**
 * Show and hide white navigation
 */
$(function () {
  $(window).scroll(function () {

    if ($(window).scrollTop() > 50) {
      console.log('giii');
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "images/logo/logo-dark.png");
      $(".navbar-toggler").removeClass("icon-color");
    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "images/logo/logo.png");
      $(".navbar-toggler").addClass("icon-color");
     }
  });
});

/**
 * Animation
 */