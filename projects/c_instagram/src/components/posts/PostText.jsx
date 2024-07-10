import React from "react";
import { Text, View } from "react-native";

export default function PostText({ user, textPost }) {
  return (
    <View
      style={{
        marginTop: 5,
      }}
    >
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: '600', marginRight: 5 }}>@{user.username} </Text>
        <Text style={{ color: "white"}}>{textPost}</Text>
      </Text>
    </View>
  );
}
