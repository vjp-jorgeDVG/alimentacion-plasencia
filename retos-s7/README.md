# Sesión 7 · Reto 3: carrito de la compra

## Cómo practicar

1. Abre `retos_con_errores.html` en el navegador para ver los tres errores del enunciado.
2. Abre `retos.html` y consulta la pestaña **Consola** para ver la versión corregida.
3. Abre `retos.js` para leer junto a cada corrección qué fallaba y por qué.

Resultado esperado con `[40, 35, 30]`: total con IVA **127.05 €**, **Envío gratis** y último producto **30 €**.

## Preguntas de la ficha

**¿En qué línea aparece el primer error y por qué esa variable no existe ahí?**

El primer error que muestra la consola aparece al intentar imprimir `ultimo` desde `mostrarResumen`. En el código con errores, `ultimo` se declara dentro de `calcularTotal`, así que solo existe dentro de esa función. El bucle también tiene un error: usa `i <= precios.length` e intenta leer una posición fuera del array.

**¿Cuánto vale cada precio y el total en cada vuelta?**

Primera vuelta: suma 40 y el total es 40. Segunda: suma 35 y queda 75. Tercera: suma 30 y queda 105. La cuarta vuelta errónea suma `undefined`, por lo que el total pasa a `NaN`.

**Cuando el total supera 100, ¿por qué sigue saliendo «Envío: 5 €»?**

Porque el `let mensaje` dentro del `if` declara otra variable local. No cambia el `mensaje` exterior que se imprime en `mostrarResumen`.

## Explicación breve

El programa recorre los precios y los suma. Si la suma supera 100, cambia el mensaje del envío. Después añade el IVA multiplicando por `1 + IVA`, muestra el total con dos decimales y consulta el último elemento del array.
