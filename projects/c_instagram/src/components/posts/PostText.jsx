import React from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";

export default function PostText({ post }) {
  return (
    <View
      style={{
        marginTop: 5,
      }}
    >
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: '600', marginRight: 5 }}>@drpaulvazo </Text>
        <Text style={{ color: "white" }}>Soooooo cute </Text>
      </Text>
    </View>
  );
}
