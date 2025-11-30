const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const formContent = document.getElementById("formContent");
const forgotPassCard = document.getElementById("forgotPassCard");
const signUpForm = document.getElementById("signUpForm");

// Hide the forgot password card initially
if (forgotPassCard) {
  forgotPassCard.style.display = "none";
  signUpForm.style.display = "none";
}

// Display the forgot password card and hide log in form
if (forgotPasswordLink && formContent && forgotPassCard) {
  forgotPasswordLink.addEventListener("click", function () {
    formContent.style.display = "none";
    formContent.style.animation = "hiddenAnimation 2s forwards ease";
    forgotPassCard.style.display = "flex";
    forgotPassCard.style.animation = "opacityAnimation 2s forwards ease";
    signUpForm.style.display = "none";
    resetInputs();
  });
} else {
  console.warn("authNavigation.js: missing element(s)", {
    forgotPasswordLink,
    formContent,
    forgotPassCard,
  });
}

// Hide the forgot password card and display log in form
const backToLoginButton = document.getElementById("backToLoginButton");
if (backToLoginButton) {
  backToLoginButton.addEventListener("click", function () {
    forgotPassCard.style.display = "none";
    forgotPassCard.style.animation = "hiddenAnimation 2s forwards ease";
    formContent.style.display = "flex";
    formContent.style.animation = "opacityAnimation 2s forwards ease";
    signUpForm.style.display = "none";
    resetInputs();
  });
}

//Show signup form and hode other form
const singUplink = document.getElementById("singUplink");
singUplink.addEventListener("click", function () {
  formContent.style.display = "none";
  formContent.style.animation = "hiddenAnimation 2s forwards ease";
  signUpForm.style.display = "flex";
  signUpForm.style.animation = "opacityAnimation 2s forwards ease";
  forgotPassCard.style.display = "none";
  resetInputs();
});

//Show login form hide other form
const loginFormLink = document.getElementById("loginFormLink");
loginFormLink.addEventListener("click", function () {
  forgotPassCard.style.display = "none";
  forgotPassCard.style.animation = "hiddenAnimation 2s forwards ease";
  formContent.style.display = "flex";
  formContent.style.animation = "opacityAnimation 2s forwards ease";
  signUpForm.style.display = "none";
  resetInputs();
});
