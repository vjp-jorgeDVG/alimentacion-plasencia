// Valores que cambio para probar el programa.
const NOMBRE_APP = "Alimentación de Plasencia";
const LIMITE_PENDIENTES = 1;
const LIMITE_PRUEBA = 2;
const CATEGORIA_PRUEBA = "Supermercado";
const TEXTO_BUSQUEDA = "lidl";

// Aquí tengo los comercios y sus datos.
const elementos = [
  {
    id: 1,
    nombre: "Carrefour Express Avenida la Salle",
    categoria: "Tienda de alimentación",
    direccion: "Avenida la Salle, 24, 10600 Plasencia, Cáceres",
    camposPendientes: 2,
    fuente: "https://www.carrefour.es/tiendas-carrefour/extremadura/caceres/",
    fechaDeRevision: "2026-10-18"
  },
  {
    id: 2,
    nombre: "Lidl Plasencia",
    categoria: "Supermercado",
    direccion: "Avenida de España, 41, 10600 Plasencia, Cáceres",
    camposPendientes: 2,
    fuente: "https://www.lidl.es/s/es-ES/tiendas/plasencia/avda-espana-41/",
    fechaDeRevision: "2026-10-18"
  },
  {
    id: 3,
    nombre: "Frutas Merche",
    categoria: "Frutería",
    direccion: "Plaza de Abastos, local 46, Calle Trujillo 9, 10600 Plasencia",
    camposPendientes: 3,
    fuente: "https://encuentre-abierto.es/plasencia/frutas-merche-plaza-de-abastos-1438561",
    fechaDeRevision: "2026-10-18"
  },
  {
    id: 4,
    nombre: "La Tahona de Esther",
    categoria: "Panadería",
    direccion: "Calle Lusitania 9, local 1, 10600 Plasencia",
    camposPendientes: 2,
    fuente: "https://tartapan.com/panaderia-la-tahona-de-esther-plasencia/",
    fechaDeRevision: "2026-10-18"
  },
  {
    id: 5,
    nombre: "Carnicería, Casquería y Charcutería Ana Isabel",
    categoria: "Carnicería",
    direccion: "Plaza de Abastos, locales 42-43, Calle Trujillo 9, 10600 Plasencia",
    camposPendientes: 1,
    fuente: "https://carniceriaanaisabel.es/productos-carniceria/",
    fechaDeRevision: "2026-10-18"
  },
  {
    id: 6,
    nombre: "Pescados y Mariscos Jesús Alegría",
    categoria: "Pescadería",
    direccion: "Mercado de Abastos, Calle Trujillo 9, puestos 48-49, 10600 Plasencia",
    camposPendientes: 2,
    fuente: "https://deplasencia.es/pescados-y-mariscos-j-alegria/",
    fechaDeRevision: "2026-10-18"
  },
  {
    id: 7,
    nombre: "Vega Selección",
    categoria: "Productos ibéricos",
    direccion: "Calle Cañada Real 23, 10600 Plasencia",
    camposPendientes: 1,
    fuente: "https://vegaseleccion.com/contacto",
    fechaDeRevision: "2026-10-18"
  },
  {
    id: 8,
    nombre: "La Chinata Oleoteca Plasencia",
    categoria: "Oleoteca y tienda gourmet",
    direccion: "Avenida de Alemania, 9, 10600 Plasencia",
    camposPendientes: 1,
    fuente: "https://lachinata.es/oleoteca/plasencia/",
    fechaDeRevision: "2026-10-18"
  }
];

// Al abrir la página, enseño el nombre y la tabla.
console.log(NOMBRE_APP);
console.table(elementos);

// Recorro la lista y digo cómo está cada comercio.
function listar(lista) {
  for (const elemento of lista) {
    // Si no supera el límite, la marco casi completa.
    const etiqueta = elemento.camposPendientes <= LIMITE_PENDIENTES
      ? "Casi completa"
      : "Por completar";

    console.log(`${elemento.id}. ${elemento.nombre} - ${etiqueta}`);
  }
}

// Filtro por categoría y por número de campos pendientes.
function filtrarPorCategoriaYLimite(lista, categoria, limite) {
  // Empiezo el recuento en cero.
  let encontrados = 0;

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    // Tienen que cumplirse las dos condiciones.
    if (elemento.categoria === categoria && elemento.camposPendientes <= limite) {
      console.log(elemento.nombre);
      encontrados++;
    }
  }

  console.log(`Encontrados: ${encontrados}`);
  // Muestro y devuelvo cuántos he encontrado.
  return encontrados;
}

// Cuento cuántos comercios hay de cada categoría.
function contarPorCategoria(lista) {
  let supermercados = 0;
  let fruterias = 0;
  let panaderias = 0;
  let carnicerias = 0;
  let pescaderias = 0;
  let ibericos = 0;
  let oleotecas = 0;
  let tiendasAlimentacion = 0;

  for (const elemento of lista) {
    switch (elemento.categoria) {
      case "Tienda de alimentación": tiendasAlimentacion++; break;
      case "Supermercado": supermercados++; break;
      case "Frutería": fruterias++; break;
      case "Panadería": panaderias++; break;
      case "Carnicería": carnicerias++; break;
      case "Pescadería": pescaderias++; break;
      case "Productos ibéricos": ibericos++; break;
      case "Oleoteca y tienda gourmet": oleotecas++; break;
      default: console.log("Categoría no esperada");
    }
  }

  console.log("Tienda de alimentación:", tiendasAlimentacion);
  console.log("Supermercado:", supermercados);
  console.log("Frutería:", fruterias);
  console.log("Panadería:", panaderias);
  console.log("Carnicería:", carnicerias);
  console.log("Pescadería:", pescaderias);
  console.log("Productos ibéricos:", ibericos);
  console.log("Oleoteca:", oleotecas);
}

// Busco el texto en los nombres y devuelvo las coincidencias.
function buscarPorTexto(lista, texto) {
  // Guardo aquí los resultados, sin tocar la lista original.
  const resultados = [];
  // Así da igual escribirlo en mayúsculas o minúsculas.
  const textoBuscado = texto.toLowerCase();

  for (const elemento of lista) {
    // Si el nombre contiene el texto, añado ese comercio.
    if (elemento.nombre.toLowerCase().includes(textoBuscado)) {
      resultados.push(elemento);
    }
  }

  return resultados;
}

// Añado un comercio nuevo y devuelvo su id.
function anadir(lista, nuevoElemento) {
  // Busco primero el id más alto.
  let idMayor = 0;

  for (const elemento of lista) {
    if (elemento.id > idMayor) {
      idMayor = elemento.id;
    }
  }

  // Uso el siguiente id para no repetir ninguno.
  nuevoElemento.id = idMayor + 1;
  lista.push(nuevoElemento);
  return nuevoElemento.id;
}

// Borro el comercio que tenga este id.
function eliminarPorId(lista, idBuscado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === idBuscado) {
      // Lo encuentro, lo borro y aviso de que sí estaba.
      lista.splice(i, 1);
      return true;
    }
  }

  // Si llego aquí, ese id no existe.
  return false;
}

// Calculo el total, la media y el comercio con más pendientes.
function calcularEstadisticas(lista) {
  // Si está vacía, aviso y no intento calcular la media.
  if (lista.length === 0) {
    console.log("No hay datos");
    return;
  }

  // Empiezo la suma en cero y tomo el primer comercio como máximo inicial.
  let total = 0;
  let maximo = lista[0];

  for (const elemento of lista) {
    total += elemento.camposPendientes;

    // Si encuentro más pendientes, actualizo el máximo.
    if (elemento.camposPendientes > maximo.camposPendientes) {
      maximo = elemento;
    }
  }

  console.log("Total:", total);
  // Muestro la media con un decimal.
  console.log("Media:", (total / lista.length).toFixed(1));
  console.log("Máximo:", maximo.nombre, maximo.camposPendientes);
}

// Pruebo las funciones al abrir la página.
listar(elementos);
// Pruebo el filtro con los dos límites.
filtrarPorCategoriaYLimite(elementos, CATEGORIA_PRUEBA, LIMITE_PENDIENTES);
filtrarPorCategoriaYLimite(elementos, CATEGORIA_PRUEBA, LIMITE_PRUEBA);
contarPorCategoria(elementos);
// Pruebo la búsqueda en minúsculas y en mayúsculas.
console.table(buscarPorTexto(elementos, TEXTO_BUSQUEDA));
console.table(buscarPorTexto(elementos, "LIDL"));

// Añado uno de prueba y luego lo borro.
const idNuevo = anadir(elementos, {
  nombre: "Comercio de prueba",
  categoria: "Supermercado",
  direccion: "Plasencia",
  fechaDeRevision: "2026-10-18",
  camposPendientes: 2,
  fuente: "Prueba"
});
console.log("Id añadido:", idNuevo);
console.log("Eliminado:", eliminarPorId(elementos, idNuevo));
console.log("Id inexistente:", eliminarPorId(elementos, -1));
calcularEstadisticas(elementos);
calcularEstadisticas([]);


