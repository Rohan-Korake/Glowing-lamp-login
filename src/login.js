import { hideElement, showElement, hideComponent } from "./toggleVisibility.js";
export function userLogin() {
  document.getElementById("loginButton").addEventListener("click", () => {
    let success = true;
    if (success) {
      hideElement("loginPage");
      showElement("welcomePage");
    }
  });
}
