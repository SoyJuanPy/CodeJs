//Declariacion de DOM
const list = document.querySelector(".menu__links");
const menu = document.querySelector(".menu__hamburguer");
const boton = document.getElementById("btn__inicio");
const contenedorPregunta = document.getElementById("container__preguntas");
const contenedorRespuesta = document.getElementById("container__respuestas");
const preguntas = document.getElementById("preguntas");
//Ajuste del menu hamburguesa
menu.addEventListener("click", () =>
  list.classList.toggle("menu__links--show")
);

//Codigo de Iniciar Juego
boton.addEventListener("click", () => {
  boton.classList.toggle("btn--off");
  contenedorPregunta.classList.add("container__preguntas--start");
  contenedorRespuesta.classList.add("container__respuestas--start");
  preguntas.classList.add("preguntas--start");
});
