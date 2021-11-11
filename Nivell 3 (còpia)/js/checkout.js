// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.nom');
let nomRegex = RegExp(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u);
let emailRegex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
let passRegex = RegExp(/^(?=.*[0-9])(?=.*[a-z]).{3,8}/);
let addressRegex = RegExp(/^.{3,}$/);
let teleRegex = RegExp(/^[0-9]{3,}$/);
let completo = true


// Exercise 8
function validate() {
    completo = true;
    if (document.getElementById('nom').value != '' && document.getElementById('nom').value.match(nomRegex)) {
        nom.classList.add("is-valid");
        nom.classList.remove("is-invalid");
    }
    else{
        nom.classList.add("is-invalid");
        nom.classList.remove("is-valid");
        completo = false;
    }
    if (document.getElementById('cognom').value != '' && document.getElementById('cognom').value.match(nomRegex)) {
        cognom.classList.add("is-valid");
        cognom.classList.remove("is-invalid");
    }
    else{
        cognom.classList.add("is-invalid");
        cognom.classList.remove("is-valid");
        completo = false;
    }
    if (document.getElementById('email').value != '' && document.getElementById('email').value.match(emailRegex)) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    }
    else{
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        completo = false;
    }
    if (document.getElementById('pass').value != '' && document.getElementById('pass').value.match(passRegex)) {
        pass.classList.add("is-valid");
        pass.classList.remove("is-invalid");
    }
    else{
        pass.classList.add("is-invalid");
        pass.classList.remove("is-valid");
        completo = false;
    }
    if (document.getElementById('tele').value != '' && document.getElementById('tele').value.match(teleRegex)) {
        tele.classList.add("is-valid");
        tele.classList.remove("is-invalid");
    }
    else{
        tele.classList.add("is-invalid");
        tele.classList.remove("is-valid");
        completo = false;
    }
      if (document.getElementById('address').value != '' && document.getElementById('address').value.match(addressRegex)) {
        address.classList.add("is-valid");
        address.classList.remove("is-invalid");
    }
    else{
        address.classList.add("is-invalid");
        address.classList.remove("is-valid");
        completo = false;
    }
      
      if (completo == true) {
        window.location.href = "confirmation.html"
    }

}



// Place order tiene que chequear que todo esté bien para ir a la página de Gracias per tu compra