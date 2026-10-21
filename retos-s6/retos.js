// SESIÓN 6 - RETO 1: tabla de veracidad
// Predicciones anotadas junto al resultado para poder explicarlas.
console.log('0 == ""', 0 == ""); // Predicción: true. Resultado: true; la igualdad flexible convierte ambos valores.
console.log('0 === ""', 0 === ""); // Predicción: false. Resultado: false; número y texto tienen tipos distintos.
console.log('"0" == false', "0" == false); // Predicción: true. Resultado: true; la igualdad flexible convierte los valores.
console.log('null == undefined', null == undefined); // Predicción: true. Resultado: true; son equivalentes con ==.
console.log('null == 0', null == 0); // Predicción: false. Resultado: false; null no equivale a 0 con ==.
console.log('NaN == NaN', NaN == NaN); // Predicción: false. Resultado: false; NaN nunca es igual, ni a sí mismo.
console.log('Number.isNaN(NaN)', Number.isNaN(NaN)); // Predicción: true. Resultado: true; detecta el valor NaN.

console.log('"10" < "9"', "10" < "9"); // Predicción: true. Resultado: true; dos textos se comparan carácter a carácter.
console.log('"10" < 9', "10" < 9); // Predicción: false. Resultado: false; al mezclar texto y número se comparan números.
console.log('"Zorro" < "abeja"', "Zorro" < "abeja"); // Predicción: true. Resultado: true; distingue mayúsculas y minúsculas.
console.log('3 > 2 > 1', 3 > 2 > 1); // Predicción: false. Resultado: false; equivale a (3 > 2) > 1.
console.log('1 < 2 < 3', 1 < 2 < 3); // Predicción: true. Resultado: true; equivale a (1 < 2) < 3.
console.log('null >= 0', null >= 0); // Predicción: true. Resultado: true; null se convierte a 0 en esta comparación.
console.log('0.1 + 0.2 === 0.3', 0.1 + 0.2 === 0.3); // Predicción: false. Resultado: false; la suma decimal no es exacta.

console.log('true && false', true && false); // Predicción: false. Resultado: false; && requiere ambos valores verdaderos.
console.log('true || false', true || false); // Predicción: true. Resultado: true; || se detiene con el primer verdadero.
console.log('!""', !""); // Predicción: true. Resultado: true; el texto vacío es falso y ! lo invierte.
console.log('!!"0"', !!"0"); // Predicción: true. Resultado: true; un texto no vacío es verdadero.
console.log('0 || "sin datos"', 0 || "sin datos"); // Predicción: "sin datos". Resultado: devuelve el primer valor verdadero.
console.log('"" && "Luis"', "" && "Luis"); // Predicción: "". Resultado: && se detiene en el primer valor falso.
console.log('0 ?? "sin datos"', 0 ?? "sin datos"); // Predicción: 0. Resultado: ?? solo sustituye null o undefined.
console.log('5 > 3 && "hola"', 5 > 3 && "hola"); // Predicción: "hola". Resultado: && devuelve el último operando si todos son verdaderos.

// Conclusión 1: usar === por defecto evita conversiones de tipo inesperadas.
// Conclusión 2: convertir el texto a número antes de comparar una entrada del usuario.
// Conclusión 3: && y || pueden devolver uno de sus operandos, no solo true o false.

// SESIÓN 6 - RETO 2: calificador de notas
// Pruebas previstas: 4, 5, 6.5, 9 y 10 son válidas; 11 y "hola" deben dar error.
// También se acepta coma decimal, por ejemplo 6,5.
const entrada = prompt('Escribe una nota del 0 al 10:');
let nota = NaN;

if (entrada !== null && entrada.trim() !== '') {
  nota = Number(entrada.replace(',', '.'));
}

if (Number.isNaN(nota) || nota < 0 || nota > 10) {
  console.error('La nota debe ser un número entre 0 y 10.');
} else {
  let calificacion = '';

  if (nota < 5) {
    calificacion = 'Insuficiente';
  } else if (nota < 6) {
    calificacion = 'Suficiente';
  } else if (nota < 7) {
    calificacion = 'Bien';
  } else if (nota < 9) {
    calificacion = 'Notable';
  } else {
    calificacion = 'Sobresaliente';
  }

  const estado = nota >= 5 ? 'Aprobado' : 'Suspenso';
  console.log(`${calificacion} - ${estado}`);
}
// Predicciones: 4 -> Insuficiente - Suspenso; 5 -> Suficiente - Aprobado;
// 6.5 -> Bien - Aprobado; 9 y 10 -> Sobresaliente - Aprobado;
// 11 y "hola" -> mensaje de error en consola.
