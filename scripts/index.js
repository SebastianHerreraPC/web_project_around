document.addEventListener("DOMContentLoaded", function () {
  // Primer archivo JS
  const editButton = document.querySelector(".profile__button_edit");
  const closeButton = document.querySelector(".popup__button-close-edit");
  const profileName = document.querySelector(".profile__name-text");
  const profileJob = document.querySelector(".profile__job");
  const inputName = document.querySelector(".popup__input-name");
  const inputJob = document.querySelector(".popup__input-job");
  const popEdit = document.querySelector(".popup__form");
  const popProfile = document.querySelector(".popup__cover-edit");

  function popupOpen() {
    popProfile.style.display = "block";
  }

  function popupClose() {
    popProfile.style.display = "none";
  }

  editButton.addEventListener("click", function () {
    popupOpen();
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    inputName.value = "";
    inputJob.value = "";
  });

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

  // Segundo archivo JS
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

  function popupAddOpen() {
    popupAdd.style.display = "block";
  }

  function popupAddQuit() {
    popupAdd.style.display = "none";
  }

  buttonAdd.addEventListener("click", function () {
    popupAddOpen();
  });

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

  //validador
  console.log(popEdit);

  const inputElements = popEdit.querySelectorAll(".popup__item");
  inputElements.forEach((inputElements) => {
    inputElements.addEventListener("input", (event) => {
      const errorNode = popEdit.querySelector(`.popoup__error_${popEdit.name}`);
      if (!inputElements.validity.valid) {
        inputElements.classList.add("popup__item_invalid");
      } else {
        inputElements.classList.remove("popup__item_invalid");
      }
    });
  });
});
