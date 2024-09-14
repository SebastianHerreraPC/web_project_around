export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    if (!inputElement.validity.valid) {
      errorElement.textContent = inputElement.validationMessage;
      inputElement.classList.add(this._config.inputErrorClass);
    } else {
      errorElement.textContent = "";
      inputElement.classList.remove(this._config.inputErrorClass);
    }
  }

  _setEventListeners() {
    const inputElements = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
