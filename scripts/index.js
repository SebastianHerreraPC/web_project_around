import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";
import { openPopup, closePopup } from "./utils.js";

//Hola, cambie mi codigo como lo dice el proyecto pero ahora no aparece, no se si las conexiones este mal
//Y no entiendo si lo demas esta mal importado o si aun funciona por que no aparecen los popups, ¿Que podra ser?

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
