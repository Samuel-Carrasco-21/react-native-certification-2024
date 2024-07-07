# useState

## ¿Qué es useState?

El hook useState es uno de los hooks más fundamentales y utilizados en React. Permite a los componentes funcionales tener un estado interno, algo que antes solo era posible en los componentes de clase. Con useState, puedes declarar una variable de estado y una función para actualizar ese estado dentro de un componente funcional.

```javascript
const [stateVariable, setStateVariable] = useState(initialValue); 
```

El elemento $stateVariable$ es el valor que tiene el estado actual el cual es inmutable, de forma que no es posible hacer lo siguiente:
```javascript
stateVariable=anotherValue
```

Ya que para cambiar el valor del estado que se haya creado, se debe hacerlo usando la función que el mismo estado provee:
```javascript
setStateVariable(anotherValue)
```

Y el 2do elemento descompuesto en la lista llamado $setStateVariable$, es la función, la cual ayudará a actualizar el valor del estado que generamos con anterioridad.

Por convención, se debe manejar un solo tipo de dato en concreto, o manejar datos que se encuentren relacionados entre sí.
