import { showError, hideError } from "./toggleVisibility.js";
export function signUp() {
  document.getElementById("signUpForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const newEmail = document.getElementById("newEmail").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword != confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match");
      return;
    } else {
      hideError("confirmPasswordError");
    }

    // fetch("https://authentication-service-vdxw.onrender.com/auth/register",)
  });
}
