import React, { useState } from "react";
import { SafeAreaView, TextInput, Text, StyleSheet, Image, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import logo from "../assets/logo.png";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("paul3@gmail.com");
  const [password, setPassword] = useState("123123123");
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoading(false);
      });
  };

  const goToRegister = () => {
    navigation.navigate("signup");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#888"
      />

      <Button
        title="Log in"
        loading={loading}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={styles.loginButton}
        titleStyle={styles.loginButtonText}
        onPress={login}
        containerStyle={styles.loginButtonContainer}
      />
      <Text style={styles.forgotPassword} onPress={() => navigation.navigate('forgot')}>¿Olvidaste tu contraseña?</Text>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.signupButton}>Regístrate.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 60,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#222",
    color: "#fff",
  },
  loginButton: {
    backgroundColor: '#0095f6',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#0095f6',
    marginBottom: 20,
  },
  signupContainer: {
    flexDirection: 'row',
  },
  signupText: {
    color: '#888',
  },
  signupButton: {
    color: '#0095f6',
    marginLeft: 5,
  },
});

export default LoginScreen;