<!--	
  Chris Nilghe - http://www.nilghe.com
  Iron Technologies	Contact Form
  09-24-2013
  Source: https://spruce.it/noise/simple-ajax-contact-form/	
-->

<?php
	if (isset($_POST['name']) &&
		isset($_POST['number']) &&
		isset($_POST['subject']) &&
		isset($_POST['message']) &&
		filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

		$contactEmail = "info@irontechnologies.com";

		$message = 	"Name: " . $_POST['name'] . "\n" .
					"Phone Number: " . $_POST['number'] . "\n" .
					"In reference to: " . $_POST['subject'] . "\n" .
					"Message: " . $_POST['message'];

		$confirmation = "Your message was successfully sent to Iron Technologies!\n" .
						"You will be contacted in 1-2 business days.\n" .
						"Thank you!";

		// Prevent header injections
		$check = "/(content-type|bcc:|cc:|to:)/i";
		foreach ($_POST as $key => $value) {
			if(preg_match($check, $value)) {
				exit;
			}
		}

		// Send Mail
		mail($contactEmail, 
			 "Iron Technologies Contact From: " . $_POST['name'],
			 $message,
			 "From: " . $_POST['email']);

		// Confirmation to sender
		mail($_POST['email'],
			 "Iron Technologies Message Sent!",
			 $confirmation,
			 "From: " . $contactEmail);
	}
?>
