<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./templates/head_contact.php"); ?>
</head>

<body>

    <!--***************************************  -->
    <!--              NAVBAR                     -->
    <!-- *************************************** -->
    <?php include("./templates/nav.php"); ?>


    <div style="margin-top:12rem;"></div>


    <!--*********************************************************************-->
    <!--                             FORM                                    -->
    <!--*********************************************************************-->

    <div style="margin-top:5rem;"></div>

    <div class="containerContact cardShadow">

        <form id="contact-form" role="form">
            <span class="contact100-form-title">
                Contact Us
            </span>

            <div class="wrap-input100 validate-input mt-4">
                <label>Name *</label>
                <input id="name" type="text" name="name" class="form-control" required="required" data-error="Name is required.">
                <div class="help-block with-errors"></div>
            </div>

            <div class="wrap-input100 validate-input">
                <label>Email *</label>
                <input id="email" type="email" name="email" class="form-control" required="required" data-error="Valid email is required.">
                <div class="help-block with-errors"></div>
            </div>

            <div class="wrap-input100 validate-input">
                <label>Message *</label>
                <textarea id="message" name="message" class="form-control" rows="4" required="required" data-error="Enter a message."></textarea>
                <div class="help-block with-errors"></div>
            </div>

            <div class="wrap-input100 validate-input">
                <label>Phone *</label>
                <input id="phone" name="phone" class="form-control" required="required" data-error="Enter Phone Number.">
                <div class="help-block with-errors"></div>
            </div>

            <div class="wrap-input100 validate-input">
                <label>*What is 2+2? (Anti-spam)</label>
                <input id="human" name="human" class="form-control" required="required" data-error="Do some math!">
                <div class="help-block with-errors"></div>
            </div>

            <div id="status" class="container text-center my-5 w-75">
                <!-- JAVSCRIPT WILL POPULATE WITH FETCH CALL TO WEB SERVER MAIL.PHP file  -->
            </div>

            <div class="form-group text-center">
                <button type="submit" class="confetti-button btn-xl">Send!</button>
            </div>
        </form>


    </div>


    <!--*********************************************************************-->
    <!--                             FOOTER                                  -->
    <!--*********************************************************************-->
    <?php include("./templates/footer.php"); ?>

    <script src="/assets/js/wow.js"></script>
    <script src="/assets/js/contactMe.js"></script>
    <script src="/assets/js/confetti.js"></script>

</body>

</html>