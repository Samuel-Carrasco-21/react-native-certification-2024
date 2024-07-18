// FormField.tsx
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useField } from 'formik';

interface Props {
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const FormField = ({ name, placeholder, secureTextEntry }:Props) => {
  const [field, meta] = useField(name);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {name}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={field.onChange(name)}
        onBlur={field.onBlur(name)}
        value={field.value}
      />
      {meta.touched && meta.error ? (
        <Text style={styles.errorText}>{meta.error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    marginBottom: 10,
    marginLeft: 10,
    textTransform: 'capitalize',
  },
  container: {
    marginBottom: 25,
  },
  input: {
    borderWidth: 3,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 100,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});

export default FormField;
