const questions = [
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    answers: ["Tierra", "Marte", "Venus", "Júpiter"],
    correct: 3,
  },
  {
    question: "¿Quién escribió 'Cien años de soledad'?",
    answers: [
      "Mario Vargas Llosa",
      "Pablo Neruda",
      "Julio Cortázar",
      "Gabriel García Márquez",
    ],
    correct: 3,
  },
  {
    question: "¿En qué año cayó el muro de Berlín?",
    answers: ["1985", "1995", "1979", "1989"],
    correct: 3,
  },
  {
    question: "¿Cuál es el metal más ligero?",
    answers: ["Oro", "Hierro", "Plata", "Aluminio"],
    correct: 3,
  },
  {
    question: "¿Cuál es la capital de Australia?",
    answers: ["Sídney", "Melbourne", "Brisbane", "Canberra"],
    correct: 3,
  },
  {
    question: "¿Cuántos continentes hay en el mundo?",
    answers: ["5", "6", "9", "7"],
    correct: 3,
  },
  {
    question: "¿En qué país se encuentra la Torre Eiffel?",
    answers: ["Italia", "Alemania", "España", "Francia"],
    correct: 3,
  },
  {
    question: "¿Quién descubrió América?",
    answers: [
      "Marco Polo",
      "Vasco de Gama",
      "Fernando de Magallanes",
      "Cristóbal Colón",
    ],
    correct: 3,
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    answers: ["Nilo", "Yangtsé", "Mississippi", "Amazonas"],
    correct: 3,
  },
  {
    question: "¿Qué animal es conocido como el rey de la selva?",
    answers: ["Elefante", "Tigre", "Rinoceronte", "León"],
    correct: 3,
  },

  {
    question: "¿En qué año comenzó la Primera Guerra Mundial?",
    answers: ["1919", "1916", "1920", "1914"],
    correct: 3,
  },
  {
    question: "¿Cuál es el país más grande del mundo por superficie?",
    answers: ["China", "Canadá", "Estados Unidos", "Rusia"],
    correct: 3,
  },
  {
    question: "¿Cuántos huesos tiene el cuerpo humano?",
    answers: ["201", "206", "198", "208"],
    correct: 1,
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    answers: ["Atlántico", "Índico", "Ártico", "Pacífico"],
    correct: 3,
  },
  {
    question: "¿Qué país tiene la mayor población del mundo?",
    answers: ["India", "Rusia", "Brasil", "China"],
    correct: 3,
  },
  {
    question: "¿Quién pintó el techo de la Capilla Sixtina?",
    answers: ["Leonardo da Vinci", "Rafael", "Donatello", "Miguel Ángel"],
    correct: 3,
  },
  {
    question: "¿Cuántos días tiene un año bisiesto?",
    answers: ["364", "362", "366", "365"],
    correct: 2,
  },
  {
    question: "¿Quién es el autor de 'Don Quijote de la Mancha'?",
    answers: [
      "Federico García Lorca",
      "Benito Pérez Galdós",
      "Lope de Vega",
      "Miguel de Cervantes",
    ],
    correct: 3,
  },
  {
    question: "¿Cuál es el símbolo químico del hierro?",
    answers: ["Ir", "He", "H", "Fe"],
    correct: 3,
  },
  {
    question: "¿Qué instrumento tiene cuerdas y se toca con un arco?",
    answers: ["Guitarra", "Piano", "Trompeta", "Violín"],
    correct: 3,
  },

  {
    question: "¿Cuál es el país más pequeño del mundo?",
    answers: ["Mónaco", "San Marino", "Liechtenstein", "Vaticano"],
    correct: 3,
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    answers: ["1965", "1972", "1969", "1970"],
    correct: 2,
  },
  {
    question: "¿Cuál es el nombre científico del ser humano?",
    answers: [
      "Homo erectus",
      "Homo sapiens",
      "Homo neanderthalensis",
      "Australopithecus",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cuál es el elemento más abundante en la atmósfera de la Tierra?",
    answers: ["Oxígeno", "Hidrógeno", "Dióxido de carbono", "Nitrógeno"],
    correct: 3,
  },
  {
    question: "¿Cuál es la montaña más alta del mundo?",
    answers: ["Monte Everest", "Monte Fuji", "K2", "Mont Blanc"],
    correct: 0,
  },
  {
    question: "¿Cuántos planetas hay en el sistema solar?",
    answers: ["9", "10", "7", "8"],
    correct: 3,
  },
  {
    question: "¿Cuál es el animal más grande del mundo?",
    answers: ["Elefante africano", "Tiburón blanco", "Jirafa", "Ballena azul"],
    correct: 3,
  },
  {
    question: "¿Cuál es el nombre de la reina actual del Reino Unido?",
    answers: ["Isabel II", "Ana", "Catalina", "Elizabeth I"],
    correct: 0,
  },
  {
    question: "¿En qué continente se encuentra Egipto?",
    answers: ["Europa", "América", "Asia", "África"],
    correct: 3,
  },
  {
    question: "¿Quién fue el primer presidente de los Estados Unidos?",
    answers: [
      "Abraham Lincoln",
      "Thomas Jefferson",
      "John Adams",
      "George Washington",
    ],
    correct: 3,
  },

  {
    question: "¿Qué tipo de animal es el ornitorrinco?",
    answers: ["Reptil", "Ave", "Anfibio", "Mamífero"],
    correct: 3,
  },
  {
    question: "¿Qué país tiene forma de bota?",
    answers: ["Francia", "España", "Grecia", "Italia"],
    correct: 3,
  },
  {
    question: "¿En qué deporte se usa una raqueta?",
    answers: ["Fútbol", "Baloncesto", "Natación", "Tenis"],
    correct: 3,
  },
  {
    question: "¿Qué significa la sigla 'ONU'?",
    answers: [
      "Organización Nacional Unida",
      "Organización Nocturna Unida",
      "Orden Nacional Unida",
      "Organización de las Naciones Unidas",
    ],
    correct: 3,
  },
  {
    question: "¿Cuál es el país con más islas en el mundo?",
    answers: ["Indonesia", "Australia", "Noruega", "Suecia"],
    correct: 3,
  },
  {
    question: "¿Qué órgano del cuerpo humano bombea sangre?",
    answers: ["Pulmones", "Cerebro", "Hígado", "Corazón"],
    correct: 3,
  },
  {
    question: "¿En qué continente se encuentra Japón?",
    answers: ["Europa", "América", "África", "Asia"],
    correct: 3,
  },
  {
    question: "¿Cuál es el tercer planeta desde el Sol?",
    answers: ["Marte", "Mercurio", "Venus", "Tierra"],
    correct: 3,
  },
  {
    question: "¿Qué significa la sigla 'FIFA'?",
    answers: [
      "Federación Internacional de Fútbol Amateur",
      "Federación Internacional de Fútbol Avanzado",
      "Federación Internacional de Fútbol Asociación",
      "Federación Independiente de Fútbol Asistido",
    ],
    correct: 2,
  },
  {
    question: "¿En qué país se encuentra la ciudad de Machu Picchu?",
    answers: ["Brasil", "Chile", "México", "Perú"],
    correct: 3,
  },

  {
    question: "¿Cuál es el gas más ligero?",
    answers: ["Helio", "Oxígeno", "Nitrógeno", "Hidrógeno"],
    correct: 3,
  },
  {
    question: "¿Qué vitamina produce el cuerpo cuando está expuesto al sol?",
    answers: ["Vitamina A", "Vitamina B12", "Vitamina C", "Vitamina D"],
    correct: 3,
  },
  {
    question: "¿Qué animal pone los huevos más grandes?",
    answers: ["Tortuga", "Avestruz", "Ballena", "Cocodrilo"],
    correct: 1,
  },
  {
    question: "¿Cuál es la moneda oficial de Japón?",
    answers: ["Won", "Dólar", "Yuan", "Yen"],
    correct: 3,
  },
  {
    question: "¿Qué país es famoso por el baile del tango?",
    answers: ["Uruguay", "México", "Chile", "Argentina"],
    correct: 3,
  },
  {
    question: "¿Qué instrumento tiene teclas y cuerdas?",
    answers: ["Flauta", "Trompeta", "Guitarra", "Piano"],
    correct: 3,
  },
  {
    question: "¿Cuál es el metal precioso más caro?",
    answers: ["Oro", "Plata", "Bronce", "Platino"],
    correct: 3,
  },
  {
    question: "¿En qué ciudad se encuentra el Coliseo?",
    answers: ["Atenas", "París", "Barcelona", "Roma"],
    correct: 3,
  },
  {
    question: "¿Qué animal es famoso por su capacidad de camuflarse?",
    answers: ["Perro", "Panda", "Elefante", "Camaleón"],
    correct: 3,
  },
  {
    question: "¿Cuál es la unidad de medida de la corriente eléctrica?",
    answers: ["Ohm", "Watt", "Volt", "Amperio"],
    correct: 3,
  },
];
