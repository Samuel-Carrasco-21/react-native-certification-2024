# Redux

## ¿Qué es Redux?

Redux es una biblioteca de JavaScript diseñada para la gestión de estados globales de manera predecible y mantenible. Su propósito principal es ayudar a los desarrolladores a escribir aplicaciones que se comporten de manera consistente, sin importar en qué entorno se ejecuten, ya sea en el cliente, en el servidor o en aplicaciones nativas. Además, facilita la prueba de aplicaciones debido a su estructura clara y sus patrones bien definidos.

## ¿Cómo funciona?

Redux sigue una arquitectura basada en un único estado global, que se almacena en un objeto llamado "store". En lugar de tener estados dispersos en varios componentes, Redux centraliza todo el estado de la aplicación en un solo lugar. Esto permite tener un control total y una visión completa del estado de la aplicación en cualquier momento.

![Ejemplo de funcionamiento de Redux](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

## Características

* **Única fuente de verdad:** Todo el estado de la aplicación se almacena en un único árbol de estado, lo que facilita la depuración y la comprensión del flujo de datos.

* **El estado es de solo lectura:** La única forma de cambiar el estado es emitiendo una acción, un objeto que describe lo que sucedió.

* **Los cambios se realizan con funciones puras:** Para especificar cómo cambia el estado, se utilizan reducers, que son funciones puras que toman el estado anterior y una acción, y devuelven un nuevo estado.
