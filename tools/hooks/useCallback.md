# useCallback

## ¿Qué es useCallback?

Es un hook en React que te permite memorizar funciones para que no se vuelvan a crear en cada renderizado. Esto es útil para optimizar componentes funcionales, especialmente cuando estas funciones se pasan como props a componentes hijos que dependen de la referencia de la función para evitar renderizados innecesarios.

## Uso de useCallback

Un ejemplo básico de su uso, es la siguiente implementación, donde no escucha a ningun cambio en alguna prop o estado que se le llegue a pasar como parámetro en el arreglo, y por lo tanto no se vuelve a renderizar:

```javascript
const memoizedCallback = useCallback(() => {
  // Función costosa o lógica que quieres memorizar
}, []);
```

No obstante al pasarle parámetros a dicha función useCallback, hará que la función se vuelva a renderizar cuando dichos estados o props cambien:

```javascript
const memoizedCallback = useCallback(() => {
  // Función costosa o lógica que quieres memorizar
}, [value1, value2, ...]);
```
