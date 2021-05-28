const form = document.querySelector('.form');

const emailInput = form.querySelector('.user');
const emailDetails = form.querySelector('.user + .details');

const passwordInput = form.querySelector('.password');
const passwordDetails = form.querySelector('.password + .details');


const submitInput = form.querySelector('.submit');


submitInput.addEventListener('click', ValidarLogin);
form.addEventListener("keydown", desmarcarError);








// Funciones

function ValidarLogin() {

  if( !esCorreoValido() ) {
    event.preventDefault();
    emailInput.classList.add('error');
    emailDetails.classList.add('error');

    return false;
  }

  if( !esContrasenaValida() ) {
    event.preventDefault();
    passwordInput.classList.add('error');
    passwordDetails.classList.add('error');

    return false;
  }

  return true;

}

function desmarcarError() {
  document.querySelectorAll('.form *').forEach(
    (e) => e.classList.remove('error')
  )
}


const regexEmail = /^[a-zñA-ZÑ1-9\.]+@[a-z1-9]+\.[a-z]{2,4}$/;

function esCorreoValido() {
  return regexEmail.test(emailInput.value);
}


const regexPassword = /^(?=.*?[A-ZÑ])(?=.*?[a-zñ])(?=.*?[#&@!%$\-*]).{6,20}$/;

function esContrasenaValida() {
  return regexPassword.test(passwordInput.value);
}
