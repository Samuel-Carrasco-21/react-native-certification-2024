import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

export const PostImage = ({imageUrl}) => {
  return <Image source={{uri: imageUrl}} style={Styles.postImg} />;
}

const Styles = StyleSheet.create({
  postImg: {
    height: Dimensions.get('screen').height / 3,
    width:  Dimensions.get('screen').width,
    resizeMode: 'contain',
  },
});

export default PostImage;