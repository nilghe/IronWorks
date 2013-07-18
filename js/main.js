$(document).ready(function(){

  /* Flex Slider Init */
   $('.flexslider').flexslider({
       animation: "slide",
       controlNav: false
   });

    /* Animate scrolling to anchors */
    $('.brand, .nav > li > a, #footer-menu > li > a').click(function(){
        var anchor = $(this).attr('href');
        var height = $('.navbar').height(); //offset by the fixed nav bar
        $('html, body').animate({
           scrollTop: $(anchor).offset().top - height
        }, 400);
        return false;
    });
});