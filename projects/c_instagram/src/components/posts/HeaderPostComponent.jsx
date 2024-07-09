import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import CircleImageComponent from "../../components/commom/circleImage";

const imageProfile = "https://randomuser.me/api/portraits/med/men/3.jpg";

const HeaderPostComponent = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircleImageComponent
          uriImage={imageProfile}
          personalStyle={styles.profileImage}
        />
        <Text style={styles.text}>Username</Text>
      </View>
      <Icon name="ellipsis-h" size={20} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    color: "white",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
});

export default HeaderPostComponent;
