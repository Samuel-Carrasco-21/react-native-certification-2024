import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Calculator() {

  // desestructurando el array que provee useState
  // para manejar el estado
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  // const [counterOne, setCounterOne] = useState(0);
  // const [counterTwo, setCounterTwo] = useState(0);

  // Función para manejar la suma de los números
  const handleSum = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
  };

  // prohibido
  // useEffect(() => {
    
  // });

  // se ejecuta cuando la pantalla se carga y renderiza por primera vez
  useEffect(() => {
    Alert.alert("Bienvenido querido usuario!");
  }, []);

  // const isDivisibleBy10 = (numberGotten) => {
  //   return numberGotten%10===0 && numberGotten!==0;
  // };

  // useEffect(() => {
  //   console.log("ha habido algun cambio!");
  //   if(isDivisibleBy10(counterOne)){
  //     Alert.alert(`El contador uno ${counterOne} es divisible entre 10`);
  //   }

  //   if(isDivisibleBy10(counterTwo)){
  //     Alert.alert(`El contador dos ${counterTwo} es divisible entre 10`);
  //   }

  // }, [counterOne, counterTwo]);

  // const funcionUno = () => {
  //   setCounterOne(counterOne+1);
  // };

  useEffect(() => {
    Alert.alert(`El resultado ahora es: ${result}`);
  }, [result]);

  return (
    <View style={styles.container}>
      {/* <Pressable style={styles.buttonStyle} onPress={funcionUno}>
        <Text style={styles.buttonTextColor}>
          counter One {counterOne}
        </Text>
      </Pressable>
      <Pressable style={{...styles.buttonStyle, backgroundColor: 'blue', marginTop: 10}} onPress={() => setCounterTwo(counterTwo + 1)}>
        <Text style={styles.buttonTextColor}>
          counter Two {counterTwo}
        </Text>
      </Pressable> */}
      <Text style={styles.title}>Calculadora de Suma</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el primer número"
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese el segundo número"
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />
      <Button title="Sumar" onPress={handleSum} />
      {result !== null && (
        <Text style={styles.result}>Resultado: {result}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    height: 50,
  },
  buttonTextColor:{
    color: '#fff',
    fontSize: 20,
  },
});
