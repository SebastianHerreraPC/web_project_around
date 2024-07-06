//seleccion
document.addEventListener("DOMContentLoaded", function () {
  const editButton = document.querySelector(".button__type-edit");
  const closeButton = document.querySelector(".button__edit-close");
  const profileName = document.querySelector(".profile__name-text");
  const profileJob = document.querySelector(".profile__job");
  const inputName = document.querySelector(".popup__input-name");
  const inputJob = document.querySelector(".popup__input-job");
  const popEdit = document.querySelector(".popup__form");
  const popProfile = document.querySelector(".popup__edit-profile");

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
  closeButton.addEventListener("click", function () {
    popupClose();
  });
});
