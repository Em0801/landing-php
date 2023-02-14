/* Form */
$('#contactForm').submit(function (event) {
    // cancels the form submission
    event.preventDefault();
    var submitButton = $(this).find('button[type=submit]');
    // submitButton.attr("disabled", true);
    $('.form__send').hide();
    $('.form__sending').show();
    submitForm();
});

function submitForm() {
    // Initiate Variables With Form Content
    var name = $('#nameInput').val();
    var email = $('#emailInput').val();
    var phone = $('#phoneInput').val();
    var message = $('#messageInput').val();

    $.ajax({
        type: 'POST',
        url: 'ajax.php',
        data:
            'name=' +
            name +
            '&email=' +
            email +
            '&phone=' +
            phone +
            '&message=' +
            message,
        success: function (success) {
            formSuccess();
        },
    });
}

function formSuccess() {
    dataLayer.push({ event: 'form_contacto' });
    $('#contactForm').trigger('reset');
    $('.form__sending').hide();
    $('.form__send').show();
    $('#msgSubmit').fadeIn('slow', function () {
        $(this).delay(5000).fadeOut('slow');
    });
    console.log('enviado');
}