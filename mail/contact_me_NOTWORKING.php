
<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if (isset($_POST['email'])) {
    // validation expected data exists
    if (!isset($_POST['name']) || !isset($_POST['email']) ||  !isset($_POST['message'])) {
        echo ('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    // $phone = $_POST['phone'];
    $message = $_POST['message'];

    $toEmail = 'rohini@biglittlebashes.com';
    $subject = "Website Contact Form:  $name";

    $human = $_POST['human'];

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }
    $email_message = "Form details below.\n\n";
    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    // $email_message .= "Phone: " . clean_string($phone) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";


    $header = "From: $email\n";
    $header .= "Reply-To: $email";

    if ($_POST['submit'] && $human == '4') {
        if (!mail($toEmail, $subject, $email_message, $header)) {
            http_response_code(500);
        } else {
            echo '<p>Your message has been sent!</p>';
        }
    } else if ($_POST['submit'] && $human != '4') {
        // echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
}
