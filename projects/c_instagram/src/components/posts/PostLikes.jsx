import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import CircleImageComponent from "../commom/circleImage";
export default function PostLikes({ numberLikes, users }) {
  return (
    <TouchableOpacity
      onPress={() => console.log("Pressed Post Likes")}
      style={styles.container}
    >
      {users.map((user, index) => {
        return (
          <CircleImageComponent
            uriImage={user.imageUrl}
            personalStyle={styles.profileImage}
          />
        );
      })}
      <Text style={{ color: "white", fontWeight: "600" }}>
        {numberLikes} likes{" "}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 15,
    marginRight: 5,
  },
});
