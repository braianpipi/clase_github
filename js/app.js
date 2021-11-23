// let botonEnviar = document.querySelector("#enviar");

// botonEnviar.addEventListener("click", formularioSaludo);

// function formularioSaludo(e){
//     document.getElementById("formulario").reset();
//     alert("Muchas Gracias por llenar el Formulario, en breves nos pondremos en contacto!")
// }

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


nombre.isValid = () => !!nombre.value;

email.isValid = () => validEmail(email.value);
subject.isValid = () => !!subject.value;
message.isValid = () => !!message.value;


const inputFields = [nombre, email, subject, message];



const validEmail = (email) => {

  const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(String(email).toLocaleLowerCase());

};

let shouldValidate = false;
let isFormValid = false;


const inputCheck = function(){

    if (!shouldValidate) return;

    isFormValid = true;

    inputFields.forEach((input) => {
      input.classList.remove("invalid");
      input.nextElementSibling.classList.add("hide");

      if (!input.isValid()) {
        input.classList.add("invalid");
        isFormValid = false;
        input.nextElementSibling.classList.remove("hide");
      }
    });

}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  inputCheck();
  if (isFormValid) {
    alert("Gracias por comunicarse, en breve responderemos a su consulta.")
    location.href ="index.html";
  }
});

inputFields.forEach((input) => input.addEventListener("input", inputCheck));