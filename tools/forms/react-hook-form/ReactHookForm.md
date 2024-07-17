# React Hook Form

## ¿Qué es React Hook Form?

`React Hook Form` es una biblioteca moderna de gestión de formularios para React y React Native que utiliza hooks para mejorar el rendimiento y la experiencia del desarrollador. Facilita la creación de formularios complejos con validación eficiente y manejo de estados optimizado.

### Ventajas de React Hook Form:

* **Rendimiento Mejorado:** Utiliza la estrategia de renderizado mínimo para optimizar el rendimiento en aplicaciones grandes.

* **Simplicidad y Facilidad de Uso:** Utiliza hooks de React para manejar el estado del formulario y la validación de manera intuitiva.

* **Integración con Validación Externa:** Es compatible con librerías de validación externas como `zod` y `validator`.

## Instalación de Dependencias

Para utilizar esta herramienta dentro de un proyecto levantado con `React Native`, se debe instalar esta dependencia por medio de `npm` o `yarn`. Cabe mencionar que en esta ocasión, se trabajará junto con las dependencias `zod` y `validator`:

```bash
npm install react-hook-form zod validator
# o
yarn add react-hook-form zod validator
```

## Uso de React Hook Form

1. Importa las bibliotecas necesarias al componente donde deseas construir el formulario:

```javascript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import validator from 'validator';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
```

2. Define el esquema de validación utilizando zod. Por ejemplo, para un formulario de login:

```javascript
const schema = z.object({
  email: z.string().email('Ingrese un email válido').min(5, 'El email debe tener al menos 5 caracteres').max(100, 'El email debe tener como máximo 100 caracteres').optional(),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').max(20, 'La contraseña debe tener como máximo 20 caracteres').optional(),
});
```

3. Ahora, será posible integrar dicha implementación con `React Hook Form` de la siguiente manera:

```javascript
export default function LoginForm() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => console.log(text)}
        placeholder="Ingrese su email"
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => console.log(text)}
        placeholder="Ingrese su contraseña"
        secureTextEntry
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button
        title="Enviar"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
```
