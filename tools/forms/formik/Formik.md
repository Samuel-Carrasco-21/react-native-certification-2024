# Formik

## ¿Qué es Formik?

`Formik` es una biblioteca popular para manejar formularios en aplicaciones React y React Native. Ofrece una forma sencilla y estructurada de gestionar el estado del formulario, validación y envío de datos.

## Uso de Formik

Para empezar a usar Formik en un proyecto de React Native, se debe usar el siguiente comando para instalarlo en el proyecto de npm:

```bash
npm install formik
```

Pero, para poder trabajar con las validaciones que pueden ser agregadas a un formulario, se debe instalar la siguiente dependencia:

```bash
npm install yup
```

Y a continuación, se presenta un ejemplo básico de cómo implementar un formulario de registro de usuario con los campos username, email y password utilizando Formik. De igual manera, se utilizarán validaciones, las cuales serán formuladas con la dependencia `yup`:

```javascript
import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            placeholder="Username"
          />
          {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
          
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            secureTextEntry
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});

export default SignupForm;
```
