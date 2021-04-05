let name = document.querySelector("#name").value;
let email = document.querySelector("#email").vale;
let phone = document.querySelector("#phone").value;
let message = document.querySelector("#message").value;
let firstName = name; // For Success/Failure Message;
let sendMessageButton = document.querySelector("#sendMessageButton");
let submitButton = document.querySelector("#sendMessageButton");
submitButton.addEventListener("click", validateForm);

function validateForm() {
    if (name === "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    if (email === "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } 
    else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    if (phone === "") {
        document.querySelector('.status').innerHTML = "Phone cannot be empty";
        return false;
    }
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
}


document.getElementById('status').innerHTML = "Sending...";
formData = {
    'name': $('input[name=name]').val(),
    'email': $('input[name=email]').val(),
    'subject': $('input[name=subject]').val(),
    'message': $('textarea[name=message]').val()
};


$.ajax({
    url: "/mail/contactMe.php",
    type: "POST",
    data: formData,
    success: function (data, textStatus, jqXHR) {

        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
            $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR, textStatus, errorThrown) {
        $('#status').text(jqXHR);
    }
});



/**
(function () {

    ("#contactForm input, #contactForm textarea").jqBootstrapValidation(
        {
            preventSubmit: true,
            submitError: ($form, event, errors) => { },  // additional error messages or events

            submitSuccess: ($form, event) => {
                event.preventDefault(); // prevent default submit behaviour

                if (firstName.indexOf(' ') >= 0)  // Check for white space in name for Success/Fail message
                    firstName = name.split(' ').slice(0, -1).join(' ');

                sendMessageButton.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
                document.ajax(
                    {
                        url: "/mail/contact_me.php",
                        type: "POST",
                        data: { name: name, phone: phone, email: email, message: message },
                        cache: false,

                        success: () => {
                            $('#success').html("<div class='alert alert-success'>"); // Success message
                            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                            $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
                            $('#success > .alert-success').append('</div>');
                            $('#contactForm').trigger("reset");  //clear all fields
                        },
                        error: () => {
                            $('#success').html("<div class='alert alert-danger'>"); // Fail message
                            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                            $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                            $('#success > .alert-danger').append('</div>');
                            $('#contactForm').trigger("reset");  //clear all fields
                        },
                        complete: () => {
                            setTimeout(() => { document.prop("disabled", false); }, 1000); // Re-enable submit button when AJAX call is complete
                        }
                    });
            },
            filter: () => { return document.is(":visible"); },
        });

    document.querySelector("a[data-toggle=\"tab\"]").click((e) => {
        e.preventDefault();
        document.tab("show");
    });
});

/*********************************************/
/*When clicking on Full hide fail/success boxes */
/*********************************************/

/**
window.onload = () => {
    document.querySelector('#name').focus(() => {
        document.querySelector('#success').html('');
    })
};


*/
