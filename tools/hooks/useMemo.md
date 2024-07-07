# useMemo

## ¿Qué es useMemo?

Es un hook en React que permite memorizar valores derivados de cálculos costosos, asegurando que estos cálculos solo se realicen cuando las dependencias cambian. Esto es útil para optimizar el rendimiento de componentes que realizan cálculos intensivos o tienen dependencias que no cambian frecuentemente.

## Uso de useMemo

La forma base de utilizar useMemo, radica en la siguiente implementación:

```javascript
const memoizedValue = useMemo(() => {
  // Cálculo costoso
  return computeExpensiveValue(a, b);
}, [a, b]);

```

Como se puede observar, se guarda el resultado obtenido del calculo en una constante llamada 'memoizedValue', cuyo valor cambia únicamente cuando los valores de 'a' y 'b' llegan a cambiar.
