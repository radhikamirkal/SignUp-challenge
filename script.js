const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");
const form = document.getElementById("signupForm");

let isEmailValid = false;
let isPasswordValid = false;

/* ---------------- EMAIL VALIDATION ---------------- */

// Validate when user leaves email field
emailInput.addEventListener("blur", function () {
  validateEmail();
  checkSuccess();
});

function validateEmail() {
  const value = emailInput.value.trim();

  if (
    value.length > 3 &&
    value.includes("@") &&
    value.includes(".")
  ) {
    emailError.style.display = "none";
    isEmailValid = true;
  } else {
    emailError.style.display = "block";
    isEmailValid = false;
  }
}

/* ---------------- PASSWORD VALIDATION ---------------- */

// Validate while typing
passwordInput.addEventListener("input", function () {
  validatePassword();
  checkSuccess();
});

function validatePassword() {
  const value = passwordInput.value.trim();

  if (value.length > 8) {
    passwordError.style.display = "none";
    isPasswordValid = true;
  } else {
    passwordError.style.display = "block";
    isPasswordValid = false;
  }
}

/* ---------------- SUCCESS CHECK ---------------- */

function checkSuccess() {
  if (isEmailValid && isPasswordValid) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
}

/* ---------------- FORM SUBMISSION ---------------- */

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Force validation on submit
  validateEmail();
  validatePassword();
  checkSuccess();

  if (!isEmailValid || !isPasswordValid) {
    return;
  }

  const confirmAction = confirm("Do you want to submit the form?");

  if (confirmAction) {
    alert("Successful signup!");
  } else {
    form.reset();
    successMessage.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    isEmailValid = false;
    isPasswordValid = false;
  }
});
