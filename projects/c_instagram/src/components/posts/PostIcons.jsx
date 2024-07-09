import React from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function PostActions() {
  const [likeIcon, setLikeIcon] = React.useState(1);
  const [bookmarkIcon, setBookmarkIcon] = React.useState(1);
  return (
    <View style={Styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" , gap: 10}}>
        <TouchableOpacity onPress={() => setLikeIcon(likeIcon + 1)}>
          <Icon name="heart" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Pressed Comment")}>
          <Icon name="comment" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Pressed Direct Message")}>
          <Icon name="paper-plane" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setBookmarkIcon(bookmarkIcon + 1)}>
        <Icon name="bookmark" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    //paddingStart: 20,
    marginEnd: 15,
    marginTop: 15,
  },
  actionIcons: {
    width: 23,
    height: 23,
    marginStart: 15,
  },
});
