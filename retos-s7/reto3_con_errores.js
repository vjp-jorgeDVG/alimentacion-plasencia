// Código original del reto 3 de la sesión 7. Contiene tres errores.
const IVA = 0.21;
let mensaje = "Envío: 5 €";

function calcularTotal(precios) {
  let total = 0;
  for (let i = 0; i <= precios.length; i++) {
    total += precios[i];
  }
  const ultimo = precios[precios.length - 1];
  if (total > 100) {
    let mensaje = "Envío gratis";
  }
  return total * (1 + IVA);
}

function mostrarResumen(precios) {
  const total = calcularTotal(precios);
  console.log(`Total con IVA: ${total.toFixed(2)} €`);
  console.log(mensaje);
  console.log(`Último producto: ${ultimo} €`);
}

mostrarResumen([40, 35, 30]);
