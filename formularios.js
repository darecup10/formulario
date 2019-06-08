//Agarrar el formulario
let form = document.querySelector("form")
let input = document.querySelector("input")

//change : se dispara cuando un control de formulario cambia de valor 
/**
 1) Seleccionar el <select>
 2) Asignarle un evento change
 3)el callback del change tiene que poder agarrar el valor del select
 4)Con el valor obtenido, buscar en el objeto "paises" la propiedad que se le corresponda
 5)Si la propiedas no existe se tiene que ver en pantalla un mensaje que diga "Tiene que seleccionar una opcion" en color rojo
 6)si la propiedad existe, tenemos que recorrer el array que tiene como valor asociado
 7)Por cada valor del array se tiene que crear un <option>
 8)Agarrar todos los <option> creados a un  nuevo <select>
 9)Agregar el <select> al DOM 
 */

 //1)
 let select = document.querySelector("select")

 //2)
 select.addEventListener("change",mostrarProv)
 function mostrarProv(){
     //3)
     // esto lo usamos primero para fijarnos si funka console.log(select.value)
     let valor = select.value
     //4) 
    // primero si funka console.log(paises[valor])
    let provincias = paises[valor]
    //5)

    if (paises = ar) {
        paises = ar
    } else {
        paises = ve
    }
    console.log(paises[valor])



 let paises = {
    ar : ["Buenos Aires","La Pampa"],
    ve : ["Margarita","Caracas"],
    ch : ["Beijing","Shangai"]
}

//Asignarle un evento submit
form.addEventListener("submit", handleSubmit)

//Cancelar el default
/*var handlesubmit = function 
handlesumit (){}*/
function handleSubmit (e){
    e.preventDefault()
    //console.dir(form)
    //console.log(input.value)
    let nombre = e.target[0].value
    nombre = nombre.trim()
    console.log(nombre.length)
}
/*
submit: es un evento que se dispara cuando un formulario intenta ser enviado.

string.lenght => number - la longitud del string.

string.trim() => string => devuelve el mismo string pero sin espacios antes ni despues

{string|array}.indexOf(x) => number (funcion vieja) retorna la posicion de la instancia del elemento X y si no se encuentra -1 
{string|array}.includes(x) => boolean (funcion  nueva) retorna verdadero o falso dependiendo si X se encuentra*/