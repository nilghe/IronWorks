<?php
	if (isset($_POST['name']) &&
		isset($_POST['number']) &&
		isset($_POST['subject']) &&
		isset($_POST['message']) &&
		filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

		mail("burnin.lover@gmail.com", 
			 "Contact From: " . $_POST['name'],
			 $_POST['message'],
			 "From: " . $_POST['email']);
	}
?>
