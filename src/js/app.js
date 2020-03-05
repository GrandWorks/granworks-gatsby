

$(document).ready(function(){

// Mobile Navigation

$("#mobile-navigation .open-menu").click(function() {
  $("#mobile-navigation .mobile-menu").removeClass("close");
  $("#mobile-navigation .mobile-menu").removeClass("hide");

  $("#mobile-navigation .open-menu").removeClass("show");
  $("#mobile-navigation .open-menu").addClass("hide");

  $("#mobile-navigation .mobile-menu").addClass("open");
});

$("#mobile-navigation .close-menu").click(function() {
  $("#mobile-navigation .mobile-menu").removeClass("open");
  $("#mobile-navigation .mobile-menu").addClass("close");

  setTimeout( function() {
    $("#mobile-navigation .mobile-menu").addClass("hide");
  }, 500);

  setTimeout( function() {
    $("#mobile-navigation .open-menu").removeClass("hide");
    $("#mobile-navigation .open-menu").addClass("show");
  }, 800);

});

setTimeout( function() {
  $("#mobile-navigation .open-menu").removeClass("hide");
  $("#mobile-navigation .open-menu").addClass("show");
}, 1000);

// Contact form
$('.the-contact-form').submit( function(event) {
   event.preventDefault();
   $('.the-contact-form .the-contact-form-submit').attr("disabled", true);

  $.ajax({
      url: "https://formspree.io/hello@sidd.in",
      method: "POST",
      data: $('.the-contact-form').serialize(),
      dataType: "json",
      success: function() {
        $('#contact-form').addClass('success');
      }
  });
});


// Foundation
  // $(document).foundation();

// parallax rellax
  // if ( $('.rellax').length){
  //   var rellax = new Rellax('.rellax');
  // }

// Smooth Scroll

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });




	// $(".comment-form-comment #comment").attr("placeholder", "* Comment");
	// $(".comment-form-author #author").attr("placeholder", "* Name");
	// $(".comment-form-email #email").attr("placeholder", "* Email Address");
	// $(".comment-form-url #url").attr("placeholder", "Website");

	// Fix for images
  // $('.the-post p > img').unwrap();


  // For slick slider

  // $('.works-slider').slick({
  // centerMode: false,
  // centerPadding: '150px',
  // slidesToShow: 3,
  // arrows: false,
  // responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });

  // $('.prev-work').click(function(){
  //   $('.works-slider').slick('slickPrev');
  // });

  // $('.next-work').click(function(){
  //   $('.works-slider').slick('slickNext');
  // });

});



// On Load event to exit loader and do AOS init
// $(window).on('load', function() {
//     // Exit loader
//    $('.loader').addClass("loader-exit");
//    // console.log("loeded");

//    // AOS on window load
//    AOS.init({
//        disable: 'mobile'
//   });

//      // Masonry News letter

//      setTimeout(
//        function()
//        {


//          $('.grid').masonry({
//            // options
//            itemSelector: '.item',
//            columnWidth: '.item'
//          });
//        }, 500);



// });


// $(".menu a, .home-link, .introducton a").click(function() {
//   $('.loader').removeClass("loader-exit");
//   $('.loader').addClass("loader-enter");
// });
