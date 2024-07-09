import { Image, StyleSheet } from "react-native";

const CircleImageComponent = ({uriImage, personalStyle }) => {
  return <Image 
    source={{ uri: uriImage }} 
    style={{...styles.image, ...personalStyle}} />;
};

const styles = StyleSheet.create({
  image: {
    width: 57,
    height: 57,
    borderRadius: 60,
    marginRight: 10,
  },
});
export default CircleImageComponent;
