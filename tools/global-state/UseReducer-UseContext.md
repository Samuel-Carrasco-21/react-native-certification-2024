# useContext & useReducer

## ¿Qué es useContext?
`useContext` es un hook de React que permite acceder a valores del contexto en cualquier parte de la aplicación sin tener que pasar props manualmente por todos los niveles del componente. El contexto en React se utiliza para compartir datos que pueden considerarse "globales" para un árbol de componentes de React, como el usuario autenticado, el tema actual o la configuración de la aplicación.

### Ejemplo básico de useContext
```jsx
import React, { useContext, createContext } from 'react';

const UserContext = createContext();

function App() {
  const user = { name: 'John Doe', age: 30 };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

function UserProfile() {
  const user = useContext(UserContext);

  return <div>Name: {user.name}, Age: {user.age}</div>;
}
```

## ¿Qué es useReducer?

`useReducer` es un hook de React que se utiliza para manejar el estado en componentes de React. Es una alternativa a `useState` y es particularmente útil para manejar estados más complejos. `useReducer` acepta un reducer (una función pura que toma el estado actual y una acción y retorna un nuevo estado) y un estado inicial, y retorna el estado actual junto con una función dispatch para despachar acciones.

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
```

## ¿Cómo usarlos conjuntamente?

Para manejar de una forma eficiente el estado global dentro de nuestra aplicación, es posible combinar el uso tanto de `useContext` para que nuestra app tenga acceso a un provider, y `useReducer` para que sea posible actualizar a un estado global por medio de un reducer de la app. Esto es útil cuando necesitas manejar estados globales y quieres evitar el uso de bibliotecas externas como Redux.

```jsx
import React, { useReducer, useContext, createContext } from 'react';

// Crear el contexto
const StateContext = createContext();

// Estado inicial
const initialState = { count: 0 };

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Proveedor de estado
function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

// Hook personalizado para usar el contexto
function useStateContext() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext debe ser usado dentro de un StateProvider');
  }
  return context;
}

// Componente principal
function App() {
  return (
    <StateProvider>
      <Counter />
    </StateProvider>
  );
}

// Componente Counter que usa el contexto
function Counter() {
  const { state, dispatch } = useStateContext();

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

export default App;
```
