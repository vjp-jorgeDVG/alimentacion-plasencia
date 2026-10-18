const NOMBRE_APP = "Alimentación de Plasencia";
const LIMITE_PENDIENTES = 1;
const LIMITE_PRUEBA = 2;
const CATEGORIA_PRUEBA = "Supermercado";
const TEXTO_BUSQUEDA = "lidl";

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

console.log(NOMBRE_APP);
console.table(elementos);

function listarTodos(lista) {
  for (const elemento of lista) {
    const etiqueta = elemento.camposPendientes <= LIMITE_PENDIENTES
      ? "Casi completa"
      : "Por completar";

    console.log(`${elemento.id}. ${elemento.nombre} - ${etiqueta}`);
  }
}

function filtrarPorCategoriaYLimite(lista, categoria, limite) {
  let encontrados = 0;

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (elemento.categoria === categoria && elemento.camposPendientes <= limite) {
      console.log(elemento.nombre);
      encontrados++;
    }
  }

  console.log(`Encontrados: ${encontrados}`);
  return encontrados;
}

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

function buscarPorTexto(lista, texto) {
  const resultados = [];
  const textoBuscado = texto.toLowerCase();

  for (const elemento of lista) {
    if (elemento.nombre.toLowerCase().includes(textoBuscado)) {
      resultados.push(elemento);
    }
  }

  return resultados;
}

function anadir(lista, nuevoElemento) {
  let idMayor = 0;

  for (const elemento of lista) {
    if (elemento.id > idMayor) {
      idMayor = elemento.id;
    }
  }

  nuevoElemento.id = idMayor + 1;
  lista.push(nuevoElemento);
  return nuevoElemento.id;
}

function eliminarPorId(lista, idBuscado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === idBuscado) {
      lista.splice(i, 1);
      return true;
    }
  }

  return false;
}

function calcularEstadisticas(lista) {
  if (lista.length === 0) {
    console.log("No hay datos");
    return;
  }

  let total = 0;
  let maximo = lista[0];

  for (const elemento of lista) {
    total += elemento.camposPendientes;

    if (elemento.camposPendientes > maximo.camposPendientes) {
      maximo = elemento;
    }
  }

  console.log("Total:", total);
  console.log("Media:", (total / lista.length).toFixed(1));
  console.log("Máximo:", maximo.nombre, maximo.camposPendientes);
}

listarTodos(elementos);
filtrarPorCategoriaYLimite(elementos, CATEGORIA_PRUEBA, LIMITE_PENDIENTES);
filtrarPorCategoriaYLimite(elementos, CATEGORIA_PRUEBA, LIMITE_PRUEBA);
contarPorCategoria(elementos);
console.table(buscarPorTexto(elementos, TEXTO_BUSQUEDA));

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
calcularEstadisticas(elementos);
