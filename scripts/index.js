//seleccion
document.addEventListener("DOMContentLoaded", function () {
  const editButton = document.querySelector(".profile__button_edit");
  const closeButton = document.querySelector(".popup__close--edit");
  const profileName = document.querySelector(".profile__name-text");
  const profileJob = document.querySelector(".profile__job");
  const inputName = document.querySelector(".popup__input-name");
  const inputJob = document.querySelector(".popup__input-job");
  const popEdit = document.querySelector(".popup__form");
  const popProfile = document.querySelector(".popup_edit_profile");

  //primera funcion para que aparezca
  function popupOpen() {
    popProfile.style.display = "block";
  }

  //funcion  para que se oculte
  function popupClose() {
    popProfile.style.display = "none";
  }
  //funcion de el boton
  editButton.addEventListener("click", function () {
    popupOpen();
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
  });
  //funcion de cerrar
  closeButton.addEventListener("click", function () {
    popupClose();
  });

  popEdit.addEventListener("submit", function (event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popEdit.reset();
    popupClose();
  });
});
