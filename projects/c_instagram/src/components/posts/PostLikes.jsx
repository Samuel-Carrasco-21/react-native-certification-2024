import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function PostLikes({post}) {
  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed Post Likes')}
      style={styles.container}>
      <Text style={{color: 'white', fontWeight: '600'}}>
        {2} likes{' '}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  }
});