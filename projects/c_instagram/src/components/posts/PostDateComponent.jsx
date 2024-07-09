import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function PostPublishDate() {
  return (
    <TouchableOpacity onPress={() => console.log('Pressed Post Publish Date')}>
      <Text
        style={{
          color: '#999',
          marginTop: 5,
          fontSize: 12,
        }}>
        2 hours ago
      </Text>
    </TouchableOpacity>
  );
}