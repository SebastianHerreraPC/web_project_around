export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._errorElements = this._inputList.map((input) =>
      this._formElement.querySelector(`#${input.id}-error`)
    );
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _toggleButtonState() {
    const isFormValid = this._inputList.every((input) => input.validity.valid);
    const submitButton = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    submitButton.disabled = !isFormValid;
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => evt.preventDefault());
    this._setEventListeners();
    this._toggleButtonState();
  }
}

export const validationConfig = {
  inputSelector: ".popup__item",
  inputErrorClass: "form__item-invalid",
  submitButtonSelector: ".popup__button-save",
};
