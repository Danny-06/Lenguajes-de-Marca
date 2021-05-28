const form = document.querySelector('.form');

const idInput = form.querySelector('.id');
const idDetails = form.querySelector('.id + .details');

const nombreInput = form.querySelector('.nombre');
const nombreDetails = form.querySelector('.nombre + .details');

const tipoInput = form.querySelector('.tipo');
const tipoDetails = form.querySelector('.tipo + .details');

const cantidadInput = form.querySelector('.cantidad');
const cantidadDetails = form.querySelector('.cantidad + .details');

const precioInput = form.querySelector('.precio');
const precioDetails = form.querySelector('.precio + .details');



const submitInput = form.querySelector('.submit');


submitInput.addEventListener('click', ValidarLogin);
form.addEventListener("keydown", desmarcarError);








// Funciones

function ValidarLogin() {

  if( !esIdValido() ) {
    event.preventDefault();
    idInput.classList.add('error');
    idDetails.classList.add('error');

    return false;
  }

  if( !esNombreValido() ) {
    event.preventDefault();
    nombreInput.classList.add('error');
    nombreDetails.classList.add('error');

    return false;
  }

  if( !esTipoValido() ) {
    event.preventDefault();
    tipoInput.classList.add('error');
    tipoDetails.classList.add('error');

    return false;
  }

  if( !esCantidadValido() ) {
    event.preventDefault();
    cantidadInput.classList.add('error');
    cantidadDetails.classList.add('error');

    return false;
  }

  if( !esPrecioValido() ) {
    event.preventDefault();
    precioInput.classList.add('error');
    precioDetails.classList.add('error');

    return false;
  }

  return true;

}

function desmarcarError() {
  document.querySelectorAll('.form *').forEach(
    (e) => e.classList.remove('error')
  )
}


const regexId = /^[0-9]+$/;

function esIdValido() {
  return regexId.test(idInput.value);
}


const regexNombre = /^[a-zñA-ZÑ]+[a-zñA-ZÑ0-9]?$/;

function esNombreValido() {
  return regexNombre.test(nombreInput.value);
}


const regexTipo = /^[a-zñA-ZÑ]+[a-zñA-ZÑ0-9]?$/;

function esTipoValido() {
  return regexTipo.test(tipoInput.value);
}


const regexCantidad = /^[0-9]+$/;

function esCantidadValido() {
  return regexCantidad.test(cantidadInput.value);
}


const regexPrecio = /^[0-9]+$/;

function esPrecioValido() {
  return regexPrecio.test(precioInput.value);
}
