const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const errorFirstname = document.querySelector('#error-firstname');
const errorLastname = document.querySelector('#error-lastname')
const formRegister = document.querySelector('#formRegister');




if(firstname && lastname && errorFirstname && errorLastname && formRegister){
    formRegister.addEventListener('submit', validarFormulario)
}else{
    console.log("error no se puede manejar eventos no encontrados")
}

function validarFormulario(event){
    event.preventDefault();

    let validation = true;

    if(firstname.value===''){
        firstname.classList.add("error");
        errorFirstname.textContent = "El nombre no puede estar vacio"
        validation = false
    }else{
        firstname.classList.remove("error");
        errorFirstname.textContent = ""
    }


    if(lastname.value===''){
        lastname.classList.add("error");
        errorLastname.textContent = "El apellido no puede estar vacio"
        validation = false
    }else{
        lastname.classList.remove("error");
        errorLastname.textContent = ""
       
    }
    
    if (validation){
        console.log("Nombre y apellidos validos");
        window.alert(("Carga exitosa"));
    }else{
        console.log("el formulario tiene errores, no se puede enviar");
        window.alert(("Completar el formulario"));
    }

    firstname.addEventListener('input', () =>{
        if(firstname.value !== ''){
            firstname.classList.remove('error')
            errorFirstname.textContent = "";
        }
    } );
     
    lastname.addEventListener('input', () =>{
        if(lastname.value !== ''){
           lastname.classList.remove('error')
           errorLastname.textContent = "";
        }
    } );


}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

document.getElementById('scrollToTop').addEventListener('click',scrollToTop)

window.onscroll = function () {
    var boton = document.getElementById('scrollToTop');
    if(document.documentElement.scrollTop > 40) {
        boton.style.display = "block"
    }else{
        boton.style.display = "none"
    }
}