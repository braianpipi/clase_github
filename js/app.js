let botonEnviar = document.querySelector("#enviar");

botonEnviar.addEventListener("click", formularioSaludo);

function formularioSaludo(e){
    document.getElementById("formulario").reset();
    alert("Muchas Gracias por llenar el Formulario, en breves nos pondremos en contacto!")
}
