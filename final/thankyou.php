<?php
	require 'connect.php';
	$conn = Connect();
	$name = $_GET['name'];
	$email = $_GET['email'];
	$services = implode(',',$_GET['services']);
	$message = $_GET['message'];
	$query = "INSERT into contactus (
	name,email,services,message) VALUES ('".$name."','".$email."','".$services."','".$message."')";
	$success = $conn->query($query);
	if (!$success) {
		# code...
		die("Couldn't enter data : ".$conn->error);
	}
	if(isset($email)){
		$to = "webenner.ak@gmail.com";
		$subject = "Order for you ";
		function died($errors){
			echo "We are very sorry, but there were error(s) found with your submission.";
			echo "These errors appear below. <br /> <br />";
			echo $errors."<br /><br />";
			echo "Please go back and fix these errors.<br /><br />";
			die();
		}
		if(!isset($name)||
			!isset($email)||
			!isset($services)||
			!isset($message)){
			died("We are sorry, but there appears to be a problem with the form you submitted. ");
		}
		$error_message = "";
		$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
			if (!preg_match($email_exp, $email)) {
				# code...
				$error_message.= "The email address you entered does not appear to be valid. ";
			}
			
			$string_exp = "/^[A-Za-z .'-]+$/";
			
			if (!preg_match($string_exp, $name)) {
					# code...
				$error_message.= "The name you entered does not appear to be valid. \n";
				}
			if(strlen($message)<2){
				$error_message.="Your comments should be atleast 8 characters long.";
			}
			if(strlen($error_message)>0){
				died($error_message);
			}	
		$body = "You have received a new mail from $name .\n"."Here is the contact details $email .\n"."The user wants following services : $services .\n"."Here is the message: $message .".
		$headers = 'From: '.$email."\r\n".
		'Reply-To '.$email."\r\n".
		'X-Mailer: PHP/'.phpversion();
		mail($to, $subject, $body,$headers);	

		$thankto = $email;
		$subject2 = "Thank you for contacting us.";
		$body2 = "Thanl you for contacting us. We have received your contact information and the services you want. We will get back to you soon. \n";
		$header = 'From: $to \r\n'.
				  'Reply-To: $to'.""."\r\n";
		mail($thankto, $subject2, $body2,$header);
		header('location: index.html');
	}	
?>