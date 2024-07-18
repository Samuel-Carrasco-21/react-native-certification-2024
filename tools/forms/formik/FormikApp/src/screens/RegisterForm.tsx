import React from 'react';
import { View, Button, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import validationSchema from '../models/validation';
import FormField from '../components/FormField';

const RegisterForm = () => {
  const initialValues: RegisterForm = {
    username: '',
    email: '',
    password: '',
  };

  const submitData = (values: RegisterForm) => {
    Alert.alert('Formulario enviado', JSON.stringify(values, null, 2));
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitData}
      >
        {({ handleSubmit }) => (
          <View style={styles.container}>
            <FormField name="username" placeholder="Nombre de usuario" />
            <FormField name="email" placeholder="Correo electrónico" />
            <FormField name="password" placeholder="Contraseña" secureTextEntry />
            <Button title="Registrar" onPress={handleSubmit}/>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#f1f5f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default RegisterForm;
