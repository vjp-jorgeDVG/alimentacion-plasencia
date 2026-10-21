# Alimentación de Plasencia

**Autor:** Jorge De Vicente Gómez  
**Modalidad:** trabajo individual  
**Nombre del proyecto y del repositorio:** `alimentacion-plasencia`

## Qué hace la aplicación

La aplicación muestra y gestiona ocho comercios de alimentación de Plasencia desde la consola del navegador. Permite listar, filtrar y contar comercios, buscar por nombre, añadir y eliminar elementos y calcular estadísticas.

## Datos de cada comercio

Cada elemento tiene un `id` numérico y estos seis campos:

| Campo | Tipo | Descripción |
|---|---|---|
| `nombre` | Texto (`string`) | Nombre del comercio |
| `categoria` | Texto (`string`) | Tipo de establecimiento |
| `direccion` | Texto (`string`) | Dirección en Plasencia |
| `fechaDeRevision` | Fecha escrita como texto (`string`, formato `AAAA-MM-DD`) | Día de revisión del dato |
| `camposPendientes` | Número (`number`) | Cuántos datos de contacto faltan: teléfono, web o coordenada exacta |
| `fuente` | Texto (`string`) | Enlace de referencia usado para revisar el comercio |

Los comercios se basan en datos reales con fuentes enlazadas. `camposPendientes` es un recuento preparado para el ejercicio; no es un dato comercial.

## Qué se ha hecho en el Sprint 0

Se preparó un array de ocho elementos y se implementaron los listados, el filtro con condición compuesta, el recuento por categoría con `switch`, la búsqueda por texto, el alta con el siguiente identificador, la eliminación por identificador y las estadísticas de total, media y máximo. La función de estadísticas avisa si la lista está vacía. La aplicación funciona en la consola; no incluye interfaz gráfica ni estilos, que no se piden en este sprint.

## Cómo ejecutar

1. Abre `index.html` en un navegador.
2. Abre las herramientas del navegador con F12.
3. Entra en **Consola** para ver la tabla y los resultados.

## Organización de las fichas

- Los ejercicios de la sesión 6 están en la carpeta local `retos-s6`, fuera de este repositorio.
- Los retos 1 y 2 de la sesión 7 se trabajan en `js/app.js`.
- El reto 3 de la sesión 7 está en la carpeta local `retos-s7`, fuera de este repositorio.

Las carpetas `retos-s6` y `retos-s7` se conservan junto al proyecto en el Escritorio, según las fichas de clase.

## Uso de inteligencia artificial

Se usó ChatGPT como apoyo para organizar los datos, preparar un primer borrador del código y revisar su correspondencia con los requisitos. Jorge De Vicente Gómez revisó el resultado y debe poder explicar las funciones durante la exposición.
