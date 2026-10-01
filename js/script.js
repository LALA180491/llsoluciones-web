// ======================================
// PRIMER PROGRAMA EN JAVASCRIPT
// ======================================

// Muestra un mensaje en la consola
// del navegador.
console.log("Bienvenido a LLSoluciones");

// Creamos una variable con el nombre
// de nuestra empresa.
const empresa = "LLSoluciones a tu Alcance";

// Mostramos el contenido de la variable.
console.log(empresa);
// ======================================
// BOTÓN INTERACTIVO
// ======================================

// Buscamos el botón utilizando su ID.
const boton = document.getElementById(
    "btnBienvenida"
);

// Escuchamos cuando el usuario hace clic.
boton.addEventListener("click", function() {

    // Mostramos un mensaje.
    alert(
        "¡Bienvenido a LLSoluciones a tu Alcance!"
    );

});