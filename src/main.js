import { resetInputs } from "./resetInputs.js";
import { toggleSwitch } from "./toggleSwitch.js";
import { formToggle } from "./formToggle.js";
import { userLogin } from "./login.js";

document.addEventListener("DOMContentLoaded", () => {
  resetInputs();
  toggleSwitch();
  formToggle();
  userLogin();
});
