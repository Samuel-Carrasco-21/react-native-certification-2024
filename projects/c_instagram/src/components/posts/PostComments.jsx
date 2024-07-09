import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function PostComments({post}) {
  return (
    <TouchableOpacity
      style={{marginTop: 5}}
      onPress={() => console.log('Pressed Post Comments')}>
      <Text style={{color: '#999'}}>
        View all 10 comments
      </Text>
    </TouchableOpacity>
  );
}