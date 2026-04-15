import { resetInputs } from './resetInputs.js';
import { hideLoader } from './main.js';

export function hideElement(element) {
  let domElement = document.getElementById(element);
  if (domElement) {
    domElement.style.display = 'none';
    domElement.style.animation = 'hiddenAnimation 1s forwards ease';
  }
  resetInputs();
}

export function showElement(element) {
  let domElement = document.getElementById(element);
  if (domElement) {
    domElement.style.display = 'flex';
    domElement.style.animation = 'showAnimation 1s forwards ease';
  }
  resetInputs();
}

export function hideComponent(component) {
  let domComponent = document.getElementById(component);
  if (domComponent) {
    domComponent.style.display = 'none';
  }
}

export function showError(element, message) {
  document.getElementById(element).innerText = message;
  hideLoader();
}

export function hideError(element) {
  document.getElementById(element).innerText = '';
}
