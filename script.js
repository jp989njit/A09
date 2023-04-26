$(document).ready(function() {
    // Contact form submit event
    $("#contact-form").submit(function(event) {
      event.preventDefault();
      var form = $(this);
      var formData = form.serialize();
      var formMessages = $("#form-messages");
      
      // Submit form data using AJAX
      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: formData,
        success: function(response) {
          formMessages.removeClass("error");
          formMessages.addClass("success");
          formMessages.text("Thank you! Your message has been sent.");
          form[0].reset();
        },
        error: function(response) {
          formMessages.removeClass("success");
          formMessages.addClass("error");
          formMessages.text("Oops! An error occurred while submitting the form.");
        }
      });
    });
  });
  