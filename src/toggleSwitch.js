const toggleSwitch = document.getElementById("btnState");
const btnSurface = document.getElementById("btnSurface");

const glowState = document.getElementById("glowState");
const unlitState = document.getElementById("unlitState");

const glowLamp = document.getElementById("glowLamp");
const unlitLamp = document.getElementById("unlitLamp");

const formContainer = document.getElementById("formContainer");

const usernameLabel = document.getElementById("usernameLabel");
const passwordLabel = document.getElementById("passwordLabel");
const registeredEmailLabel = document.getElementById("registeredEmailLabel");

const username = document.getElementById("username");
const password = document.getElementById("password");

const checkBox = document.getElementById("checkBox");

let isLampOn = false;
toggleSwitch.addEventListener("click", function () {
  isLampOn = !isLampOn;
  // Toggle lamp button
  btnSurface.style.justifyContent = isLampOn ? "flex-end" : "flex-start";

  // Input field label
  passwordLabel.style.display = isLampOn ? "block" : "none";
  usernameLabel.style.display = isLampOn ? "block" : "none";
  registeredEmailLabel.style.display = isLampOn ? "block" : "none";

  //Lamp state
  glowState.style.display = isLampOn ? "block" : "none";
  unlitState.style.display = isLampOn ? "none" : "block";

  //Button state
  glowLamp.style.display = isLampOn ? "block" : "none";
  unlitLamp.style.display = isLampOn ? "none" : "block";

  //Lamp animation
  formContainer.style.visibility = isLampOn ? "visible" : "hidden";
  formContainer.style.animation = isLampOn
    ? "opacityAnimation 1.5s forwards ease"
    : "hiddenAnimation 1.5s forwards ease";

  if (isLampOn) {
    username.value = "";
    password.value = "";
    checkBox.checked = false;
    isLampOn = true;
  }
});
