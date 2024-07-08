# useRef

## ¿Qué es useRef?

Es un hook que devuelve un objeto ref mutable cuya propiedad .current se puede asignar y leer. Los objetos ref son una forma de acceder a los elementos DOM o mantener cualquier valor mutable que no cause un nuevo renderizado del componente cuando cambie.

## Uso de useRef

* Usamos useRef para crear una referencia a un componente:

```javascript
const componentRef = useRef(null);
```

* Mediante un efecto secundario o una función, podemos interactuar con la etiqueta que hayamos escogido, asegurando que esta exista del lado del cliente:

```javascript
useEffect(() => {
  if (componentRef.current) {
    componentRef.current.focus();
    // puede ser cualquier otra accion que se nos permita hacer con dicho elemento escogido y no solo 'focus()'
  }
}, [valueToListen]);
```

* Agregamos la referencia al campo del componente que hayamos escogido. Cabe aclarar que este debe ser un componente nativo de React Native u otro componente de alguna dependencia que ofrezca componentes que permitan ser referenciados:

```javascript
<NativeComponent ref={componentRef} />
```
