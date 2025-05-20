const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const btnCerrarModal2 = document.querySelector("#btn-cerrar-modal2"); 
const modal = document.querySelector("#modal");
const respuesta = document.querySelector("#respuesta");
const form = document.querySelector("#formulario");

/*btnAbrirModal.addEventListener("click", ()=>{
    respuesta.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    respuesta.close();
})*/

btnAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})

btnCerrarModal2.addEventListener("click", ()=>{
    respuesta.close();
})

var input_name = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("btnEnviar");

var input_name2 = document.getElementById("nombre2");
var input_email2 = document.getElementById("email2");
var input_submit2 = document.getElementById("btnEnviar2");

var placeholder_nombre = document.getElementById("nombreRespuesta");



//input_submit.addEventListener("click", enviarFormulario)

/*
function enviarFormulario(event){
    event.preventDefault();
    
    var name_value = input_name.value;
    var email_value = input_email.value;

    console.log(name_value);
    console.log(email_value);

}
*/

input_submit.addEventListener("click", confirmarForm)
input_submit2.addEventListener("click", confirmarForm2)

function confirmarForm(event){
    event.preventDefault();

    let name_value = input_name.value;
    let email_value = input_email.value;

    if(!formLleno(name_value, email_value)){
        console.log("formulario incompleto")
    } else {
        console.log("Nombre: " + name_value);
        console.log("Email: " + email_value);
        placeholder_nombre.innerHTML = name_value;
        input_name.value = '';
        input_email.value = '';
        modal.close();
        respuesta.showModal();
    }
}

function confirmarForm2(event){
    event.preventDefault();

    let name_value = input_name2.value;
    let email_value = input_email2.value;

    if(!formLleno(name_value, email_value)){
        console.log("formulario incompleto")
    } else {
        console.log("Nombre: " + name_value);
        console.log("Email: " + email_value);
        placeholder_nombre.innerHTML = name_value;
        input_name2.value = '';
        input_email2.value = '';
        formulario.reset();
        respuesta.showModal();
    }
}

function formLleno(name_value, email_value){
    if (name_value == '' || email_value == '') {
        return false
    } else {
        return true
    }
}

