export function resetInputs() {
  const loginForm = document.getElementById("loginForm");
  const signUpForm = document.getElementById("signUpForm");
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  const formerror = document.querySelectorAll(".form-error");

  loginForm && loginForm.reset();
  signUpForm && signUpForm.reset();
  forgotPasswordForm && forgotPasswordForm.reset();
  formerror.forEach((element) => {
    element.innerText = "";
  });
}
