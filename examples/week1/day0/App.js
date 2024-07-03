import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";


const Square = ({color}) => {
  return  <View style={{
    width: 100,
    height: 100,
    backgroundColor: color
  }}><Text style={{color: 'white'}}>2</Text></View>
}
// stateless
export default function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  const subtractCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.cajaGrande}>
      <Square color="red"/>
      <Square color="blue"/>
      <Square color="black"/>
    </View>
  );
}

const styles = StyleSheet.create({
  cajaGrande: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textInfo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  buttons: {
    flex: 1/2,
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "flex-end",
    padding: 10,
  }
});
