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

        var submitBtn = $(this);
        
        var queryString = 'name=' + name
                        + '&number=' + number
                        + '&email=' + email
                        + '&subject=' + subject
                        + '&message=' + message;

        if (validEmail(email) && (name.length > 1) && (number.length > 5) && (message.length > 1)) {
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: queryString,
                success: function(){
                    console.log('email sent!');
                    submitBtn.addClass('btn-success disabled');
                    submitBtn.html('<i class="icon-ok" style="font-size: 1.1em;"></i> Email was sent!');
                },
                error: function(){
                    console.log('failed');
                    submitBtn.addClass('btn-danger');
                    submitBtn.html('<i class="icon-frown" style="font-size: 1.1em;"></i> Email not sent, try again.');
                } 
            });
        }

        e.preventDefault();
    });

    /*  ==================================
        Helper Functions
        ================================== */
    function validEmail(email) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(email);
    }
});