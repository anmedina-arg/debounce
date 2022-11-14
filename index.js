/*PRIMER PASO - COMPRENDER EL CONCEPTO DE DEBOUNCE*/
function alertar(nombre, apellido) {
  alert("Hola " + nombre + " " + apellido);
}

function debounce(funcion, tiempo) {
  let timeoutID;
  return function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    const context = this;
    const arg = arguments;
    timeoutID = setTimeout(() => {
      funcion.apply(context, arg);
    }, tiempo);
  };
}

const alertarDebounce = debounce(alertar, 1000);

document
  .querySelector("button")
  .addEventListener("click", () => alertarDebounce("andres", "medina"));

/* SEGUNDA PARTE PARA COMPRENDER EL DEBOUNCE, EJEMPLO PRACTICO*/
import palabras from "./array.js";

const input = document.querySelector("input");
const resultado = document.querySelector(".js-resultados");

input.addEventListener("keyup", (e) => {
  renderResultados(e.target.value);
});
function renderResultados(letras) {
  const resultado = palabras
    .filter((palabra) => {
      if (palabra.match(`.*${letras}.*`)) {
        return palabra;
      }
    })
    .map((palabra) => `<li>${palabra}</li>`)
    .join("");

  renderResultados.innerHTML = resultado;
}
