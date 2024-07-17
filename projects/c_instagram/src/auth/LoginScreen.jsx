import { SafeAreaView, TextInput, Text } from "react-native";
import { useState } from "react";
import { Button } from "react-native-elements/dist/buttons/Button";

import { auth, signInWithEmailAndPassword } from '../config/firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("paul3@gmail.com");
  const [password, setPassword] = useState("123123123");

  const login = () => {
console.log("login");
signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const goToRegister = () => {
    navigation.navigate("signup");
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Email"
        value={email}
        onChange={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChange={setPassword}
        secureTextEntry
      />
      <Button
        title="Log in"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(111, 202, 186, 1)",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={login}
      />
      <Text onPress={goToRegister}>No tienes cuenta? Registrate</Text>
    </SafeAreaView>
  );
};
export default LoginScreen;
