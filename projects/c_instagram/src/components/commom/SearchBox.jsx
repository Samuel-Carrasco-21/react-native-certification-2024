import { View, Text, StyleSheet, TextInput } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
export const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionic name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="black"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  searchIcon: {
    fontSize: 15,
    color: "black",
    opacity: 0.5,
    position: "absolute",
    left: 22,
    zIndex: 1,
  },
  textInput: {
    width: "95%",
    height: 30,
    backgroundColor: "#EFEFEF",
    borderRadius: 5,
    paddingLeft: 35,
    opacity: 0.9,
    fontSize: 15,
  },
});
