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

// Reto 2: cambia el color si los likes superan 10
function actualizarColor() {
  const alto = likes > 10;
  textoContador.classList.toggle("alto", alto);
  document.body.classList.toggle("fondo-alto", alto);
}

// Actualiza el contador en el DOM
function actualizarContador() {
  textoContador.textContent = likes;
  actualizarColor();
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
  actualizarContador();
  agregarFila(likes, obtenerHora());
});

// Reto 1a: restar like (no baja de 0)
botonRestar.addEventListener("click", () => {
  if (likes > 0) {
    likes--;
    actualizarContador();
    if (cuerpoTabla.firstChild) {
      cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
  }
});

// Reto 1b: reiniciar a cero
botonReiniciar.addEventListener("click", () => {
  likes = 0;
  actualizarContador();
  cuerpoTabla.innerHTML = "";
});
