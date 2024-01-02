const form = document.querySelector('#signup-form');
const emailField = form.querySelector('.email-field');
const emailInput = emailField.querySelector('#email');
const emailError = emailField.querySelector('.email-error')
const passwordField = form.querySelector('.create-password');
const passwordInput = passwordField.querySelector('#password');

const confirmPassword = form.querySelector('.confirm-password');
const passwordConfirm = form.querySelector('#confirm-password');
console.log(emailError);


// email validation

function checkEmail() {
  const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
  
  // Test the email against the pattern



// Example usage
var email = "example@example.com";
if (!emailInput.value.match(emailPattern)) {
 return emailError.classList.remove('.email-error');
} else {
 emailError.classList.add('.emailError');
 }
 
}

// calling fnction on form
emailField.addEventListener('submit', function (e) {
  e.preventDefault(); //preventing form submission and page from refreshing
 checkEmail();
 })