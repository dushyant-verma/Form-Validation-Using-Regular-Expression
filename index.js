document.getElementById('registrationForm').addEventListener('submit', function (e) {

    e.preventDefault();  // Prevent Form from submitting

    let isValid = true;

    // Username validation

    const username = document.getElementById('username').ariaValueMax;
    const usernameError = document.getElementById('usernameError');
    const usernameRegex = /^[a-zA-Z0-9_]{5,15}$/;

    if (!usernameRegex.test(username)) {

        usernameError.textContent = 'Username must be 5-15 characters and contain only letters, numbers, and underscores.';
        usernameError.style.display = 'block';
        isValid = false;

    } else {
        usernameError.style.display = 'none';
    }


    // Email Validation

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }


    // Password Validation

    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password)) {

        passwordError.textContent = 'Password must be atleast 8 characters long and contain at least one letter and one number.';
        passwordError.style.display = 'block';
        isValid = false;

    } else {
        passwordError.style.display = 'none';
    }


    // If the form is valid, you can submit the form or show a success message

    if (isValid) {

        alert('Form submitted successfully');
    }

});