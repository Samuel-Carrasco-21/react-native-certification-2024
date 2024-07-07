# useEffect

## ¿Qué es useEffect?

Este hook te permite realizar efectos secundarios en tus componentes.

Para utilizar correctamente useEffect, es necesario tomar en cuenta sus 2 parámetros principales

  * Una función: Esta función contiene el efecto que deseas ejecutar.
  * Un arreglo: Este arreglo contiene los estados, cuyos cambios serán escuchados por el useEffect y ejecutarán toda la lógica que se encuentre dentro de la función flecha. Puede estar vacío, y al estarlo solo ejecutará 2 veces cuando se cargue la pantalla y se renderice por primera vez.

```javascript
useEffect(() => {
  // código que se ejecuta solo la primera vez que carga la pantalla y se renderiza
}, []);
```

```javascript
const [valueOne, setValueOne] = useState(initialValue);
const [valueTwo, setValueTwo] = useState(initialValue);

useEffect(() => {
  // código que se ejecuta cuando el valor de ambos estados cambie
}, [valueOne, valueTwo]);
```
