import { View, Text, StyleSheet } from "react-native";

const Post = () => {
  return (
    <View>
      <Text style={styles.text}>Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
export default Post;
