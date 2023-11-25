//Funciones, metodos, condicionales


let sinLucro ="Sitio web sin fines de lucro." ;
let alertaMostradaSinLucro = sessionStorage.getItem('alertaMostradaSinLucro');

if (!alertaMostradaSinLucro) {
alert (sinLucro);
sessionStorage.setItem("alertaMostradaSinLucro", "true");
}




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
let alertaMostrada = localStorage.getItem("alertaMostrada"); // para que no se muestre siempre las alertas y el prompt

if (!alertaMostrada){ 
 while(true) {
     let input= prompt("¿Cuántos años tenes?");

  if (!isNaN(input)){
     edad = parseInt(input, 10);
     console.log("Edad ingresada:", edad);
 break;
} 

  else { 
    alert("Por favor, ingrese un número válido.");
  }
}
localStorage.setItem("alertaMostrada", "true");
}


let alertaFinalMostrada = localStorage.getItem("alertaFinalMostrada");// Guarda en localStorage que la alerta final ya se mostró en alguna sesión anterior


if (!alertaFinalMostrada && !isNaN(edad) && edad >= numero) {
    alert("Podes dejar tus datos para pedir más información.");
    localStorage.setItem("alertaFinalMostrada", "true");
    
} else if (alertaFinalMostrada) {
    alert("Lo siento, debes ser mayor de 18 años para recibir más información.");
}












