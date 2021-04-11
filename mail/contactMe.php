<?php

$_POST = json_decode(file_get_contents('php://input'), true);

if (
    empty($_POST['name'])    ||
    empty($_POST['email'])   ||
    empty($_POST['message']) ||
    empty($_POST['human'])   ||
    empty($_POST['human'])
) {
    http_response_code(500);
    exit();
}


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$human = $_POST['human'];

$sendTo = 'rohini@biglittlebashes.com';
$subject = 'New message from contact form'; // subject of the email;
$header = "From: $email\n Reply-To: $email";
$okMessage = 'Contact form successfully submitted.';
$errorMessage = 'There was an error while submitting the form.';

$emailText = "\n";
$emailText .= "===============================\n";
$emailText .= "     Form details below \n";
$emailText .= "===============================\n";
$emailText .= "Name: $name \n";
$emailText .= "Email:  $email \n";
$emailText .= "Phone:  $phone \n";
$emailText .= "Message:  $message \n";


try {

    if ($human != '4')
        echo 'You answered the anti-spam question incorrectly!';

    else {
        if (!mail($sendTo, $subject, $emailText, $header)) http_response_code(500);
        else echo 'Your message has been sent!';
    }
}
//
catch (\Exception $e) {
    echo 'ERROR: ' + $e;
}
