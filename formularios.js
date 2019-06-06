let form = document.querySelector("form")
let input = document.querySelector("input")
form.addEventListener("submit", handleSubmit)

/*var handlesubmit = function 
handlesumit (){}*/
function handleSubmit (e){
    e.preventDefault()
    console.log(input.value)
}

/*
submit: es un evento que se dispara cuando un formulario intenta ser enviado.
*/