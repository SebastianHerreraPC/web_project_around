document.addEventListener("DOMContentLoaded", function () {
  //declaraciones
  const popupAdd = document.querySelector(".popup__add-images");
  const buttonAdd = document.querySelector(".button__type-add");
  const buttonAddClose = document.querySelector(".button__type-add-close");
  const popForm = document.querySelector(".popup__form-add");
  const popImput = document.querySelector(".popup__lugar");
  const popTemplate = document.querySelector("#card__template");
  const cardsArea = document.querySelector(".cards__container");

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
