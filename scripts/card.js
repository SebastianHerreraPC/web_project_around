export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__button-delete")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__name").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
