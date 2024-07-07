# memo

## ¿Qué es memo?

Se trata de un Higher Order Component (HOC) en React que permite optimizar el rendimiento de los componentes funcionales. Este hook previene renderizados innecesarios al memorizar el resultado del renderizado de un componente funcional y solo lo vuelve a renderizar si los props que recibió con anterioridad han cambiado.

Una forma inicial de utilizar este hook es de la siguiente manera:

```javascript
const MyComponent = ({ prop1, prop2 }) => {
  // lógica del componente
  return (
    <View>
      MyComponent
      {prop1} - {prop2}
    </View>
  );
};

export default memo(MyComponent);
```

No obstante, en caso de que se deseen realizar comparaciones entre los valores de los valores previos y nuevos de las props de dicho componente, con el fin de evaluar si debe renderizarse o no, se puede modificar su uso de la siguiente manera::

```javascript
// prevProps: valores de props anteriores
// nextProps: valores de props nuevos
export default memo(MyComponent, (prevProps, nextProps) => {
  // lógica de comparación de props
  const prop1Prev = prevProps.prop1;
  const prop1Next = nextProps.prop1;
  // ...
  
  return // siempre debe retornarse un valor de True o False
  // > Si el valor es verdadero, el componente NO se renderiza
  // > Si el valor es falso, el componente SI se renderiza
});
```
