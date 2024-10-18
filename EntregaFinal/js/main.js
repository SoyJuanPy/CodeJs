// Declaración de DOM
const list = document.querySelector(".menu__links");
const menu = document.querySelector(".menu__hamburguer");
const boton = document.getElementById("btn__inicio");
const contenedorPregunta = document.getElementById("container__preguntas");
const contenedorRespuesta = document.getElementById("container__respuestas");
let preg;

// Ajuste del menú hamburguesa
menu.addEventListener("click", () =>
  list.classList.toggle("menu__links--show")
);

// Código de Iniciar Juego
boton.addEventListener("click", () => {
  boton.classList.toggle("btn--off");
  contenedorPregunta.classList.add("container__preguntas--start");
  contenedorRespuesta.classList.add("container__respuestas--start");

  // Limpiar contenedores antes de generar
  contenedorPregunta.innerHTML = "";
  contenedorRespuesta.innerHTML = "";

  preg = document.createElement("p");
  preg.classList.add("preguntas--start");

  generarPreguntas(); 
});

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
        generarPreguntas();
      } else {
        console.log("incorrecto");
      }
    });

    contenedorRespuesta.appendChild(res);
  });
};
