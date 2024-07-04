import { StyleSheet } from "react-native";

export const colors = {
  pink: "#F9DCDA",
  yellow: '#F0D6AB',
  pinkLight: "#EDE5E6",
  white: "#FEFBFB",
  black: "#000000",
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.pinkLight,
  },
  containerResult: {
    flex: 1,
    backgroundColor: colors.pink,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonsContainer: {
    flex: 2,
    paddingTop: 20
  },
  mainResult: {
    color: colors.black,
    fontSize: 60,
    fontWeight: "500",
    textAlign: "right",
  },
  subResult: {
    color: colors.black,
    fontSize: 35,
    textAlign: "right",
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.yellow,
    borderRadius: 40,
    justifyContent: "center", 
    marginHorizontal: 10,
    
  },
  buttonText: {
    color: colors.black,
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
});
