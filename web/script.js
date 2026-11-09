// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const botonRestar = document.getElementById("btn-restar");
const botonReiniciar = document.getElementById("btn-reiniciar");
const cuerpoTabla = document.getElementById("tabla-registros");

// Variable de estado: número de clics realizados
let likes = 0;

// Devuelve la hora actual en formato HH:MM:SS
function obtenerHora() {
  const ahora = new Date();
  const hh = String(ahora.getHours()).padStart(2, "0");
  const mm = String(ahora.getMinutes()).padStart(2, "0");
  const ss = String(ahora.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

// Inserta una fila al inicio del tbody (los más recientes arriba)
function agregarFila(numero, hora) {
  const fila = document.createElement("tr");

  const celdaNumero = document.createElement("td");
  celdaNumero.textContent = numero;

  const celdaHora = document.createElement("td");
  celdaHora.textContent = hora;

  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);
  cuerpoTabla.insertBefore(fila, cuerpoTabla.firstChild);
}

// 2. Escuchar el evento 'click' y manipular el DOM
boton.addEventListener("click", () => {
  likes++;
  textoContador.textContent = likes;
  agregarFila(likes, obtenerHora());
});

// Reto 1a: restar like (no baja de 0)
botonRestar.addEventListener("click", () => {
  if (likes > 0) {
    likes--;
    textoContador.textContent = likes;
    if (cuerpoTabla.firstChild) {
      cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
  }
});

// Reto 1b: reiniciar a cero
botonReiniciar.addEventListener("click", () => {
  likes = 0;
  textoContador.textContent = likes;
  cuerpoTabla.innerHTML = "";
});
