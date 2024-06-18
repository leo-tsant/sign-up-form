let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let passwordField = document.getElementById("password");
  let confirmPasswordField = document.getElementById("confirm_password");
  let errorText = document.querySelector(".error-text");

  if (passwordField.value !== confirmPasswordField.value) {
    errorText.innerHTML = "Passwords do not match!";
    passwordField.classList.add("error-field");
    confirmPasswordField.classList.add("error-field");
    passwordField.value = ""; // Clear the password field
    confirmPasswordField.value = ""; // Clear the confirm password field
    event.preventDefault(); // Prevents the form from submitting
  }
});
