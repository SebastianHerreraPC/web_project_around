document.addEventListener("DOMContentLoaded", function () {
  //declaraciones
  const popupAdd = document.querySelector(".popup__add-images");
  const buttonAdd = document.querySelector(".button__type-add");
  const buttonAddClose = document.querySelector(".button__type-add-close");
  const popForm = document.querySelector(".popup__form-add");
  const popImput = document.querySelector(".popup__lugar");
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
    const value = popImput.value;
    const newNode = popTemplate.content.querySelector(".card").cloneNode(true);
    newNode.querySelector(".card__image").style.backgroundImage =
      "url('https://picsum.photos/200/300?r=' + Math.random())";
    newNode.querySelector(".card__name").textContent = value;
    cardsArea.append(newNode);
    popForm.reset();
  });
});
