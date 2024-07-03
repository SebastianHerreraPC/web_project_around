document.addEventListener("DOMContentLoaded", function () {
  const buttonEdit = document.querySelector(".button__type-edit");
  const popProfile = document.querySelector(".pop__content_edit-profile");
  const buttonClose = document.querySelector(".button__type-close");
  const profileName = document.querySelector(".profile__name");
  const profileJob = document.querySelector(".profile__job");
  const profileForm = document.querySelector(".pop__form");
  const inputName = document.querySelector(".pop__input-name");
  const inputJob = document.querySelector(".pop__input-job");

  function showPop() {
    popProfile.style.display = "block";
  }

  function hidePop() {
    popProfile.style.display = "none";
  }

  buttonEdit.addEventListener("click", function () {
    showPop();
  });

  buttonClose.addEventListener("click", function () {
    hidePop();
  });

  profileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    profileForm.reset();
    hidePop();
  });
});
