import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";
import { openPopup, closePopup } from "./utils.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const validationConfig = {
  inputSelector: ".popup__item",
  inputErrorClass: "form__item-invalid",
};

const cardsContainer = document.querySelector(".cards__container");

initialCards.forEach((data) => {
  const card = new Card(data, "#card__template");
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
});

const formElement = document.querySelector(".popup__form");

const formValidator = new FormValidator(validationConfig, formElement);
formValidator.enableValidation();

const popupEdit = document.querySelector(".popup__cover-edit");
document
  .querySelector(".profile__button_edit")
  .addEventListener("click", () => {
    openPopup(popupEdit);
  });

document
  .querySelector(".popup__button-close-edit")
  .addEventListener("click", () => {
    closePopup(popupEdit);
  });

const popupAdd = document.querySelector(".popup__cover-images");
document.querySelector(".profile__add-button").addEventListener("click", () => {
  openPopup(popupAdd);
});

document
  .querySelector(".popup__button-add-close")
  .addEventListener("click", () => {
    closePopup(popupAdd);
  });
