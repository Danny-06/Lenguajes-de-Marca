/* Botón de la izquierda de la barra de navegación con el logo */
let home = document.querySelector('.home');

/* Contenedor Principal */
let main = document.querySelector('.main');

home.addEventListener("click", sidePanel);

let toggle = 0;
function sidePanel() {
  if(toggle == 0) {
    /* Aumentar el tamaño del contenedor que contiene el contenido de la página y ocultar el panel lateral */
    main.style = '--mainContentWidth: 100%';
    toggle++;
  } else {
    /* Disminuir el tamaño del contenedor que contiene el contenido de la página y mostrar el panel lateral */
    main.style = '--mainContentWidth:';
    toggle--;
  }
}
