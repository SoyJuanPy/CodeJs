let iva = 21;
let pais = 8;
let ganancias = 30;
let totalImpuestos = iva + pais + ganancias;
let dolar = 1074.7;
let euro = 1365.67;
alert("Programa para calcular la compra de dólares/euros...");

const calcularPrecioConImpuesto = (precio, cantidad) => {
  let impuestoTotal = (totalImpuestos / 100) * precio * cantidad;
  return precio * cantidad + impuestoTotal;
};

const cambioMoneda = () => {
  let seguirComprando = true;

  do {
    let moneda = prompt(
      "Ingresar el tipo de moneda a comprar (dólar/euro):"
    ).toLowerCase();

    while (moneda !== "dolar" && moneda !== "euro") {
      alert("Tipo de dato no válido");
      moneda = prompt(
        "Ingresar el cambio nuevamente (dólar/euro):"
      ).toLowerCase();
    }

    let precio = moneda === "dolar" ? dolar : euro;
    let cantidad = Number(
      prompt(`Ingresar la cantidad de ${moneda} a comprar`)
    );

    while (isNaN(cantidad) || cantidad <= 0) {
      alert("Debes ingresar una cantidad válida.");
      cantidad = Number(prompt(`¿Cuántos ${moneda} quieres comprar?`));
    }

    let total = precio * cantidad;
    let calcuImpuesto = confirm("¿Quieres calcular el precio con impuestos?");

    if (calcuImpuesto) {
      let cantidadConImpuesto = calcularPrecioConImpuesto(precio, cantidad);
      alert(
        `El total de la compra con impuestos incluidos es de ${
          moneda === "dolar" ? "$" : "€"
        }${cantidadConImpuesto.toFixed(2)}`
      );
    } else {
      alert(
        `El valor sin impuestos es de ${
          moneda === "dolar" ? "$" : "€"
        }${total.toFixed(2)}`
      );
    }

    seguirComprando = confirm("¿Quieres cambiar más dólares/euros?");

    if (!seguirComprando) {
      let finalizarCompra = confirm("¿Deseas finalizar la compra?");
      if (finalizarCompra) {
        alert("Gracias por la compra");
      } else {
        alert("Gracias por tu compra");
        seguirComprando = true;
      }
    }
  } while (seguirComprando);
};

cambioMoneda();
