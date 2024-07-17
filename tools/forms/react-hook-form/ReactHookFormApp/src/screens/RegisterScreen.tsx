import React, { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { SafeAreaView, StyleSheet, ScrollView, Alert, KeyboardAvoidingView } from 'react-native';
import { users } from '../data/users';
import Card from '../components/Card';
import Title from '../components/Title';
import InputForm from '../components/InputForm';
import CustomButton from '../components/CustomButton';
import { useForm } from 'react-hook-form';
import { RegisterForm } from '../models/registerForm';
import { VALIDATORS_REGISTER } from '../data/validators';
import CustomAlert from '../components/CustomAlert';

const RegisterScreen = () => {
  const { control, handleSubmit } = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      password: "",
      repeated_password: "",
      username: "",
    },
    resolver: zodResolver(VALIDATORS_REGISTER),
  });

  const [isAlertVisible, setAlertVisible] = useState<boolean>(false);
  const [newUserData, setNewUserData] = useState<RegisterForm>({username:'', email:'', password:'', repeated_password:''});

  const handleRegister = (data: RegisterForm) => {
    const { email, username } = data;
    const gottenUser = users.find((user) => user.email === email || user.username === username);
    if (gottenUser) {
      Alert.alert('Registration Failed', 'Username or Email already exists.');
      return;
    }
    setNewUserData(data);
    setAlertVisible(true);
  };

  const handleAccept = () => {
    setAlertVisible(false);
    users.push({
      id: users.length + 1,
      username: newUserData.username,
      email: newUserData.email,
      password: newUserData.password,
    });
    Alert.alert('Registration Successful', `Welcome, ${newUserData.username}!`);
  };

  const handleCancel = () => {
    setNewUserData({username:'', email:'', password:'', repeated_password:''});
    setAlertVisible(false);
    Alert.alert('Registration Canceled', 'The user was not registered.');
  };

  return (
    <SafeAreaView style={styles.container}>
      {
        <CustomAlert
          isVisible={isAlertVisible}
          onAccept={handleAccept}
          onCancel={handleCancel}
          title="¿Agregar usuario?"
          message={`Se agregará un nuevo usuario con los siguientes datos:\n\n* username: ${newUserData.username}\n* email: ${newUserData.email}`}
        />
      }
      <KeyboardAvoidingView behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollView}>
        <Card style={styles.card}>
          <Title text="Register" size={32} color="#333" />
          <InputForm
            label="Username"
            name="username"
            iconName="person"
            placeholder="Enter your username"
            secureTextEntry={false}
            control={control}
          />
          <InputForm
            label="Email"
            name="email"
            iconName="mail-outline"
            placeholder="Enter your email"
            secureTextEntry={false}
            control={control}
          />
          <InputForm
            label="Password"
            name="password"
            iconName="lock-closed-outline"
            placeholder="Enter your password"
            secureTextEntry={true}
            control={control}
          />
          <InputForm
            label="Confirm Password"
            name="repeated_password"
            iconName="lock-closed-outline"
            placeholder="Confirm your password"
            secureTextEntry={true}
            control={control}
          />
          <CustomButton
            title="Register"
            onPress={handleSubmit(handleRegister)}
            backgroundColor="#28a745" 
            textColor="#fff" 
          />
        </Card>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 10,
  },
});

export default RegisterScreen;
