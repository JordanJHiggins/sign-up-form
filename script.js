const passWord1 = document.querySelector(".password1");
const passWord2 = document.querySelector(".password2");
const submitButton = document.querySelector(".submit-button");
const passwordError = document.querySelector(".password-error");

function checkPass() {
  if (passWord1.value != passWord2.value) {
    submitButton.disable = true;
    passwordError.innerHTML = "Password must match.";
    passWord2.setCustomValidity("Invalid field.");
  } else {
    submitButton.disable = false;
    passwordError.innerHTML = "";
    passWord2.setCustomValidity("");
  }
}
