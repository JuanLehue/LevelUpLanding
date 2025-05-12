const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})

var input_name = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("btnEnviar");

input_submit.addEventListener("click", enviarFormulario)

function enviarFormulario(event){
    event.preventDefault();

    var name_value = input_name.value;
    var email_value = input_email.value;

    console.log(name_value);
    console.log(email_value);

}

console.log(input_name);
