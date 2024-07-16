import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Alert } from 'react-native';
import Card from '../../components/Card';
import Title from '../../components/Title';
import {users} from "../../data/users";
import InputForm from '../../components/InputForm';
import CustomButton from '../../components/CustomButton';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Registration Failed', 'Passwords do not match.');
      return;
    }
    const userExists = users.some(u => u.email === email);
    if (userExists) {
      Alert.alert('Registration Failed', 'Email already exists.');
    } else {
      users.push({
        id: users.length + 1,
        email,
        password,
      });
      Alert.alert('Registration Successful', `Welcome, ${email}!`);
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card style={styles.card}>
          <Title text="Register" size={32} color="#333" />
          <InputForm
            label="Email"
            iconName="mail-outline"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <InputForm
            label="Password"
            iconName="lock-closed-outline"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <InputForm
            label="Confirm Password"
            iconName="lock-closed-outline"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <CustomButton 
            title="Register" 
            onPress={handleRegister} 
            backgroundColor="#28a745" 
            textColor="#fff" 
          />
          <CustomButton 
            title="Back to Login" 
            onPress={() => navigation.navigate('Login')} 
            backgroundColor="#2196F3" 
            textColor="#fff" 
          />
        </Card>
      </ScrollView>
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

export default RegisterScreen