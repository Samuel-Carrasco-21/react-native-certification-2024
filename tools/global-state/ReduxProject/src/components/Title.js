import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ text, size = 24, color = '#333', style }) => {
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
