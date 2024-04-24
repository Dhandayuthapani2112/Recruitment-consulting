const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const backLayer = document.querySelector('.back-layer');

document.querySelector('.login button').addEventListener('click', () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    backLayer.style.clipPath = '';
});

document.querySelector('.signup button').addEventListener('click', () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    backLayer.style.clipPath = 'inset(0 0 0 50%)';
});

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var icon = document.querySelector(".toggle-password");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.add("visible");
    } else {
        passwordField.type = "password";
        icon.classList.remove("visible");
    }
}



