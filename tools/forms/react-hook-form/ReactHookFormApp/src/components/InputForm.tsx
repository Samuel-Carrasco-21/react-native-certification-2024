import React from 'react';
import { Controller } from 'react-hook-form';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  control: any;
  name: string;
  label: string;
  iconName: string;
  placeholder: string;
  secureTextEntry: boolean;
};

const InputForm = ({ control, name, label, iconName, placeholder, secureTextEntry }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View style={styles.container}>
            {
              error && (
                <Text style={styles.errorMessage}>
                  {error.message}
                </Text>
              )
            }
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
              <Icon name={iconName} size={20} color="#666" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#666"
                onBlur={onBlur}
              />
            </View>
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: 300,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 300,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    minWidth: "100%",
  },
  errorMessage: {
    width: '85%',
    textAlign: 'left',
    color: 'red',
    marginVertical: 4,
  },
});

export default InputForm;
