const selectElement = document.getElementById("pais");
const hora = document.getElementById("time");

function updateTime() {
  const lugar = selectElement.value.toLowerCase();
  const tiempo = new Date();

  if (lugar === "argentina") {
    hora.innerText = tiempo.toLocaleTimeString();
  } else if (lugar === "espania") {
    tiempo.setHours(tiempo.getHours() + 5);
    hora.innerText = tiempo.toLocaleTimeString();
  } else if (lugar === "eeuu") {
    tiempo.setHours(tiempo.getHours() - 1);
    hora.innerText = tiempo.toLocaleTimeString();
  } else {
    hora.innerText = "Por favor, selecciona un país.";
  }
}

selectElement.addEventListener("change", () => {
  updateTime();
  clearInterval(window.updateInterval);
  window.updateInterval = setInterval(updateTime, 1000);
});

updateTime();
window.updateInterval = setInterval(updateTime, 1000);
