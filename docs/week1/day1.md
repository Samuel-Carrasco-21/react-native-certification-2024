# Day 1: Componentes Básicos y JSX

Bienvenido al día 1 del curso de Certificación en React Native. 

Hoy nos centraremos en los componentes básicos de React Native y el uso de JSX.

## Objetivos del Día.

- Aprender a utilizar JSX para estructurar componentes.
- Practicar la creación y rederización de componentes. 
- Comprender la diferencia entre componentes stateless y stateful.


## Componentes Básicos de JSX

**Estructura de un Componente**

Un componente en React o React Native se puede definir utilizando una función o una clase, pero nos estaremos centrando en los componentes funcionales con JSX.

**React**
```js
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, UPB!</h1>
    </div>
  );
};
``` 

**React Native**
```js
import React from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  return (
    <View>
      <Text>Hello, UPB!</Text>
    </View>
  );
};
``` 

## Componentes Stateless y Stateful.

### Componente Stateless (Sin Estado)

**Definición**

Los componentes stateless no tiene su propio estado interno. Solo reciben datos a través de props y los renderizan. Son puramente de presentación y dependen completamente de las props

```jsx
import React from 'react';
import { View, Text } from 'react-native';

const TextComponent = ({ message }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default TextComponent;
```

### Componente Stateful (Con Estado)

**Definición**

Los componentes stateful tiene su propio estado interno. Lo que les permite tener una lógica más compleja y responder a las interacciones del usuario

```jsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ContadorComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default ContadorComponent;
```

## Componentes Básicos en React Native

### StyleSheet 

StyleSheet es el componente donde se añadira los estilos de nuestros componentes.

```js 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, StyleSheet!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

export default MyComponent;
```

### View 

View es el componente más básico sobre el que heredan la mayoría de los demás componentes. Es equivalente a un <div> en HTML.

```js 
import React from 'react';
import { View, StyleSheet } from 'react-native';

const MyViewComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default MyViewComponent;
```

### Text 

Text es el componente en el que mostraremos textos

```js 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyTextComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Text Component!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default MyTextComponent;
```

### Image

Image es el componente utilizado para mostrar imágenes.

```js 
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const MyImageComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default MyImageComponent;
```

### TextInput

TextInput es el componente que proporciona un espacio al usuario para ingresar texto mediante el teclado de su dispositivo.

```js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MyTextInputComponent = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={setText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
  },
});

export default MyTextInputComponent;
```

### ScrollView

ScrollView es el componente que permite establecer un contenedor en el que se podrán almacenar varios componentes que se pueden desplazar en la pantalla.

```js 
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const MyScrollViewComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 3</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 4</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default MyScrollViewComponent;
```