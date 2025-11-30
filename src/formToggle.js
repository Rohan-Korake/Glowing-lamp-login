const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const formContent = document.getElementById("formContent");
const forgotPassCard = document.getElementById("forgotPassCard");

// Hide the forgot password card initially
if (forgotPassCard) {
  forgotPassCard.style.display = "none";
}

// Display the forgot password card and hide log in form
if (forgotPasswordLink && formContent && forgotPassCard) {
  forgotPasswordLink.addEventListener("click", function () {
    formContent.style.display = "none";
    forgotPassCard.style.display = "flex";
    forgotPassCard.style.animation = "opacityAnimation 1s forwards ease";
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
    formContent.style.animation = "hiddenAnimation 1s forwards ease";
    formContent.style.display = "flex";
    forgotPassCard.style.display = "none";
  });
}
