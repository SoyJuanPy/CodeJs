// Declaración de DOM
const list = document.querySelector(".menu__links");
const menu = document.querySelector(".menu__hamburguer");
const boton = document.getElementById("btn__inicio");
const reinicio = document.getElementById("reinicio");
const puntaje = document.getElementById("puntos");
const contenedorPregunta = document.getElementById("container__preguntas");
const contenedorRespuesta = document.getElementById("container__respuestas");
const contenedorPerder = document.getElementById("container__gameover");
let preg;
let puntos = 0;
// Ajuste del menú hamburguesa
menu.addEventListener("click", () =>
  list.classList.toggle("menu__links--show")
);
const startGame = () => {
  boton.classList.toggle("btn--off");
  contenedorPregunta.classList.add("container__preguntas--start");
  contenedorRespuesta.classList.add("container__respuestas--start");

  // Limpiar contenedores antes de generar

  preg = document.createElement("p");
  preg.classList.add("preguntas--start");

  generarPreguntas();
};
// Código de Iniciar Juego
boton.addEventListener("click", startGame);

//Seleccoin de indice aleatorio
const preguntasRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

//mezclar las respuestas
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; //
  }
  return array;
};
//generar preguntas y respuestas
const generarPreguntas = () => {
  const numeroPreguntas = preguntasRandom(0, questions.length);

  preg.textContent = `"${questions[numeroPreguntas].question}"`;
  contenedorPregunta.appendChild(preg);

  let respuestas = [...questions[numeroPreguntas].answers];
  const correctIndex = questions[numeroPreguntas].correct;

  respuestas = shuffleArray(respuestas);

  const newCorrectIndex = respuestas.indexOf(
    questions[numeroPreguntas].answers[correctIndex]
  );

  // Limpiar respuestas previas
  contenedorRespuesta.innerHTML = "";

  // Crear y agregar respuestas
  respuestas.forEach((respuesta, i) => {
    const res = document.createElement("p");
    res.classList.add("respuestas--start");
    res.textContent = respuesta;

    res.addEventListener("click", () => {
      if (i === newCorrectIndex) {
        contenedorPregunta.innerHTML = "";
        boton.classList.remove("btn--off");

        startGame();
        puntaje++;
      } else {
        boton.classList.add("btn--off");
        contenedorPregunta.classList.remove("container__preguntas--start");
        contenedorPregunta.classList.add("btn--off");
        contenedorRespuesta.classList.remove("container__respuestas--start");
        contenedorRespuesta.classList.add("btn--off");

        // Limpiar contenedores antes de generar
        contenedorPregunta.innerHTML = "";
        contenedorRespuesta.innerHTML = "";

        preg.classList.remove("preguntas--start");
        contenedorPerder.classList.add("perder--ver");
        reinicio.classList.add("reiniciar--ver");
        puntaje.classList.add("puntaje--ver");
        puntaje = 0;
      }
    });

    contenedorRespuesta.appendChild(res);
  });
};

reinicio.addEventListener("click", () => {
  boton.classList.remove("btn--off");
  contenedorPerder.classList.remove("perder--ver");
  reinicio.classList.remove("reiniciar--ver");
  puntaje.classList.remove("puntaje--ver");
  contenedorPregunta.innerHTML = "";
  contenedorRespuesta.innerHTML = "";

  startGame;
});

puntaje.addEventListener("click", () => {});
