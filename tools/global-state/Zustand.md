# Zustand

## ¿Qué es Zustand?
`Zustand` es una biblioteca pequeña y rápida para el manejo del estado global en aplicaciones de React. A diferencia de Redux, `Zustand` ofrece una API simple y directa sin necesidad de configurar reducers, middlewares ni boilerplate adicional. `Zustand` utiliza una tienda de estado basada en hooks, lo que permite una integración fácil y directa en tus componentes de React.

## Instalación
Para instalar `Zustand`, puedes usar npm o yarn para hacerlo:

```bash
npm install zustand

yarn add zustand
```

## Uso básico

Dentro de un archivo `.ts`, se debe utilizar las siguiente configuración para establecer que valores se encontrarán dentro de nuestro estado y como podrán ser actualizados:

```ts
import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));
```

Una vez establecida dicha configuración, podemos usar `useStore` de la siguiente manera en un componente:

```jsx
import React from 'react';
import { useStore } from './store';

function Counter() {
  const count = useStore(state => state.count);
  const increment = useStore(state => state.increment);
  const decrement = useStore(state => state.decrement);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```
