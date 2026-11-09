// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const botonRestar = document.getElementById("btn-restar");
const botonReiniciar = document.getElementById("btn-reiniciar");
const cuerpoTabla = document.getElementById("tabla-registros");

// Variable de estado: número de clics realizados
let likes = 0;
