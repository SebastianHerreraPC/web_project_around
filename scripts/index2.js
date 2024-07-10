document.addEventListener("DOMContentLoaded", function () {
  //declaraciones
  const popupAdd = document.querySelector(".popup__cover-images");
  const buttonAdd = document.querySelector(".profile__add-button");
  const buttonAddClose = document.querySelector(".popup__button-add-close");
  const popForm = document.querySelector(".popup__form-add");
  const popInput = document.querySelector(".popup__lugar");
  const popUrl = document.querySelector(".popup__url");
  const popTemplate = document.querySelector("#card__template");
  const cardsArea = document.querySelector(".cards__container");

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

  //funcionalidades dentro de el boton
  function popupAddOpen() {
    popupAdd.style.display = "block";
  }
  function popupAddQuit() {
    popupAdd.style.display = "none";
  }
  //funcion para abrir
  buttonAdd.addEventListener("click", function () {
    popupAddOpen();
  });
  //funcion de cerrar boton
  buttonAddClose.addEventListener("click", function () {
    popupAddQuit();
  });
  popForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const placeValue = popInput.value;
    const linkValue = popUrl.value;
    const newNode = popTemplate.content.querySelector(".card").cloneNode(true);
    newNode.querySelector(".card__image").src = linkValue;
    newNode.querySelector(".card__name").textContent = placeValue;
    cardsArea.append(newNode);
    popForm.reset();
  });

  initialCards.forEach(function (item) {
    const newNode = popTemplate.content.querySelector(".card").cloneNode(true);
    newNode.querySelector(".card__image").src = item.link;
    newNode.querySelector(".card__name").textContent = item.name;
    cardsArea.prepend(newNode);

    const deleteButton = newNode.querySelector(".card__button-delete");
    deleteButton.addEventListener("click", function () {
      newNode.remove();
    });
  });
});
