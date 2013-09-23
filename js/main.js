$(document).ready(function(){

    // Animate scrolling to anchors 
    $('.scroll-to').click(function(){
        var anchor = $(this).attr('href');
        var height = $('.navbar').height(); //offset by the fixed nav bar
        $('html, body').animate({
           scrollTop: $(anchor).offset().top - height
        }, 400);
        return false;
    });

    // Hide the navbar when anchors clicked
    // This helps the animate scrolling to work properly with calulating heights
    $('.nav li a').on('click', function(){
        $('.nav-collapse').collapse('hide');
    });

    // CSS3 Animation
    $('.icon').hover(
    	function(){
    		$(this).addClass('animated bounce');
    	}, 
    	function(){
    		$(this).removeClass('animated bounce');
    	}
    );
});