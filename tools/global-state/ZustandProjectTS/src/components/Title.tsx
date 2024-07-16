import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  text: string;
  size: number;
  color: string;
  style?: ViewStyle;
}

const Title = ({ text, size = 24, color = '#333', style = {} }: Props) => {
  return (
    <Text style={[styles.title, { fontSize: size, color: color }, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Title;
