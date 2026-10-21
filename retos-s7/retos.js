// SESIÓN 7 - RETO 3: carrito de la compra corregido.
const IVA = 0.21;
let mensaje = "Envío: 5 €";

function calcularTotal(precios) {
  let total = 0;

  // Corrección 1: < evita acceder a precios[precios.length], que no existe.
  for (let i = 0; i < precios.length; i++) {
    total += precios[i];
  }

  if (total > 100) {
    // Corrección 2: no declarar otro mensaje con let; hay que cambiar el exterior.
    mensaje = "Envío gratis";
  }

  return total * (1 + IVA);
}

function mostrarResumen(precios) {
  const total = calcularTotal(precios);
  // Corrección 3: ultimo se declara aquí, donde se utiliza, no dentro de otra función.
  const ultimo = precios[precios.length - 1];

  console.log(`Total con IVA: ${total.toFixed(2)} €`);
  console.log(mensaje);
  console.log(`Último producto: ${ultimo} €`);
}

mostrarResumen([40, 35, 30]);
// Resultado esperado: Total con IVA 127.05 €, Envío gratis, último producto 30 €.
