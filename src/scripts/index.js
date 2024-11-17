fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

import "../pages/index.css";
import { Card } from "./card.js";
import { Section } from "./section.js";
import { PopupWithImage } from "./popupWithImage.js";
import { PopupWithForm } from "./popupWithForm.js";
import { UserInfo } from "./userInfo.js";
import { FormValidator, validationConfig } from "./formValidator.js";

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

const cardsContainer = document.querySelector(".cards__container");

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (info) => {
      const card = new Card(info, "#card__template");
      const cardElement = card.generateCard();

      cardElement
        .querySelector(".card__image")
        .addEventListener("click", () => {
          const popupWithImage = new PopupWithImage(".popup__image");
          popupWithImage.open(info.link, info.name);
        });

      cardSection.addItem(cardElement);
    },
  },
  ".cards__container"
);

cardSection.renderItems();

const formElement = document.querySelector(".popup__form");
const formValidator = new FormValidator(validationConfig, formElement);
formValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__name-text",
  jobSelector: ".profile__job",
});

const popupEdit = new PopupWithForm(".popup__cover-edit", (info) => {
  userInfo.setUserInfo(info);
});

document
  .querySelector(".profile__button_edit")
  .addEventListener("click", () => {
    const currentUserInfo = userInfo.getUserInfo();
    document.querySelector("#popup-Nombre").value = currentUserInfo.name;
    document.querySelector("#popup-Trabajo").value = currentUserInfo.job;
    popupEdit.open();
  });

const popupAdd = new PopupWithForm(".popup__cover-edit", (info) => {
  const card = new Card(info, "#card__template");
  const cardElement = card.generateCard();
  cardSection.addItem(cardElement);
});

document.querySelector(".profile__add-button").addEventListener("click", () => {
  popupAdd.open();
});
