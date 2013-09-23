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

    // Contact Form
    $('#submit-email').on('click', function(e){
        
        var name = $('#input-name').val();
        var number = $('#input-number').val();
        var email = $('#input-email').val();
        var subject = $('#input-subject').val();
        var message = $('#input-message').val();

        console.log(name);
        console.log(number);
        console.log(email);
        console.log(subject);
        console.log(message);
        
        var queryString = 'name=' + name
                        + '&number=' + number
                        + '&email=' + email
                        + '&subject=' + subject
                        + '&message=' + message;

        console.log(queryString);

        $.ajax({
            type: "POST",
            url: "../contact/submit.php",
            data: queryString,
            success: function(){
                console.log('email sent!');
            },
            error: function(){
                console.log('failed');
            } 
        });
        e.preventDefault();
    });
});