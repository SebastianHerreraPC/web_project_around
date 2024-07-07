//seleccion de el boton de agregar

const addPhoto = document.querySelector(".button__type-add");
const popAdd = document.querySelector(".popup__add-images");

//funcion de abrir

function popupOpenEdit() {
  popAdd.style.display = "block";
}
//funcion cerrar
function popupCloseEdit() {
  popAdd.style.display = "none";
}

//funcion de boton
addPhoto.addEventListener("click", function () {
  popupOpenEdit();
});
