import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Alert } from 'react-native';
import Card from '../../components/Card';
import Title from '../../components/Title';
import {users} from "../../data/users";
import InputForm from '../../components/InputForm';
import CustomButton from '../../components/CustomButton';
import { useDispatch } from '../../store/StoreReducer';
import { reducerTypes } from '../../store/reducers/storeReducer';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      Alert.alert('Login Successful', `Welcome, ${email}!`);
      dispatch({type: reducerTypes.login});
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card style={styles.card}>
          <Title text="Login" size={32} color="#333" />
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
          <CustomButton 
            title="Login" 
            onPress={handleLogin} 
            backgroundColor="#28a745" 
            textColor="#fff" 
          />
          <CustomButton 
            title="Register" 
            onPress={() => navigation.navigate('Register')} 
            backgroundColor="#2196F3" 
            textColor="#fff" 
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default LoginScreen;