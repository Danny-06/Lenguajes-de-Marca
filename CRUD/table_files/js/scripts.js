
const popup = document.querySelector('.popup');

const cancelPopupButton = popup.querySelector('input.cancel');
const deletePopupButton = popup.querySelector('input.delete');

cancelPopupButton.addEventListener("click", HidePopup);
deletePopupButton.addEventListener("click", Reload);




// Clonar la 1ª fila para rellenar la tabla
let numFilasExtra = 15;
for(let i = 1; i <= numFilasExtra; i++) {
  const tBody = document.querySelector('.table .tbody');
  const row = document.querySelector('.table .tbody .row').cloneNode(true);
  tBody.append(row);
}

const deleteRowButtons = document.querySelectorAll('.deleteRow');

deleteRowButtons.forEach(
  (button) => button.addEventListener("click", ShowPopup)
);



// Funciones

function ShowPopup() {
  popup.classList.add('open');
}


function HidePopup() {
  popup.classList.remove('open');
}

function Reload() {
  location.href = location.href;
}

