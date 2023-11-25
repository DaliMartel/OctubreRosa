//Funciones, metodos, condicionales


let sinLucro ="Sitio web sin fines de lucro." ;
alert (sinLucro);

// Método para obtener el elemento body
let body = document.querySelector("body");
document.body.style.backgroundColor = "pink" ; // Cambiar el color de fondo del body a rosa



//funciones

function cambiarColor() {
  let boton = document.getElementById("Enviar");
  let nuevoColor =  "pink";
  boton.style.backgroundColor = nuevoColor;
}


// Pregunta de edad
let numero = 18;
let edad;

while(true) {
    let input= prompt("¿Cuántos años tenes?");

  if (!isNaN(input)){
     edad = parseInt(input, 10);
    console.log("Edad ingresada:", edad);
    break;
  } 
  else { 
    alert("Por favor, ingrese un número válido.");
    
  } }



if( !isNaN(edad) && edad >= numero) {
 alert ("Podes dejar tus datos para pedir mas información.");
}

 else{ 
     alert("Lo siento, debes ser mayor de 18 años para recibir mas información.");
 }










