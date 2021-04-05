<?php

$_POST = json_decode(file_get_contents('php://input'), true);


if (empty($_POST['name']) || empty($_POST['email']) ||  empty($_POST['message'])) {

    echo var_dump($input);
    http_response_code(500);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
var_dump($input);

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = $email;
$sendTo = 'rohini@biglittlebashes.com';
$subject = 'New message from contact form'; // subject of the email;

// form field names and their translations. array variable name => Text to appear in the email
$fields = array('name' => 'Name', 'email' => 'Email', 'message' => 'Message');
$okMessage = 'Contact form successfully submitted.';
$errorMessage = 'There was an error while submitting the form.';
$emailText = "";

try {
    if (count($_POST) == 0)
        throw new \Exception('Form is empty');

    foreach ($_POST as $key => $value) {
        if (isset($fields[$key])) // when field exists in the $fields array, include it in the email 
            $emailText .= "$fields[$key]: $value\n";
    }

    // All the necessary headers for the email.
    $headers = array(
        'Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $email,
        'Reply-To: ' . $_POST['email'],
        'Return-Path: ' . $email,
    );

    mail($sendTo, $subject, $emailText, implode("\n", $headers));   // Send email
    $responseArray = array('type' => 'success', 'message' => $okMessage);
} catch (\Exception $e) {
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    header('Content-Type: application/json');
    echo $encoded;
} else
    echo $responseArray['message']; // else just display the message */
