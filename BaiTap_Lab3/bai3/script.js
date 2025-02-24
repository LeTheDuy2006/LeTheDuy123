$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        let isValid = true;


        const name = $('#name').val().trim();
        if (!name) {
            $('#nameError').text('Tên không được để trống.');
            isValid = false;
        } else {
            $('#nameError').text('');
        }


        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#emailError').text('Email không hợp lệ.');
            isValid = false;
        } else {
            $('#emailError').text('');
        }


        const password = $('#password').val();
        if (password.length < 6) {
            $('#passwordError').text('Mật khẩu phải có ít nhất 6 ký tự.');
            isValid = false;
        } else {
            $('#passwordError').text('');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});