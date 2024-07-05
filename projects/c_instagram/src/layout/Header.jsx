import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import logo from "../assets/logo.png";
const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <View style={styles.iconContainer}>
        <View style={styles.hearts}>
        </View>
        <Icon name="heart" size={20} color="white" />
        <View style={styles.unReadContainer}>
            <Text style={styles.unRead}>3</Text>
        </View>
        <Icon
          name="facebook-messenger"
          size={20}
          color="white"
          styles={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    color: "white",
  },
  image: {
    width: 100,
    height: 20,
  },
  iconContainer: { flexDirection: "row", gap: 15 },
  unRead: {
    color: "white",
    fontSize: 8,
    textAlign: 'center'
  },
  hearts: {
    backgroundColor: 'red',
    borderRadius: 8,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
    bottom: 10,
    zIndex: 10
  },
  unReadContainer:{
    backgroundColor: 'red',
    borderRadius: 8,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 50,
    bottom: 10,
    zIndex: 10
  }
});

export default Header;
