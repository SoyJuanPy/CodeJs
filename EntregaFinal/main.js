//Boton hamburguesa
const list = document.querySelector(".menu__links");
const menu = document.querySelector(".menu__hamburguer");

menu.addEventListener("click", () =>
  list.classList.toggle("menu__links--show")
);
