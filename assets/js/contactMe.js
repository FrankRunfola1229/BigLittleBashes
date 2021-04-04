let name = document.querySelector("input#name")
let email = document.querySelector("input#email")
let phone = document.querySelector("input#phone")
let message = document.querySelector("textarea#message")
let firstName = name; // For Success/Failure Message
let sendMessageButton = document.querySelector("#sendMessageButton");


(function () {

    ("#contactForm input,#contactForm textarea").jqBootstrapValidation(
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
                        setTimeout(() => {document.prop("disabled", false); }, 1000); // Re-enable submit button when AJAX call is complete
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
window.onload = () => {
    document.querySelector('#name').focus(() => {
        document.querySelector('#success').html('');
    })
};
