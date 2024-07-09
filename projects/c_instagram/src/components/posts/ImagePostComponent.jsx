import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

export const PostImage = () => {
//   return <Image source={{uri: post.imgUrl}} style={Styles.postImg} />;
  return <Image source={{uri: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg'}} style={Styles.postImg} />;
}

const Styles = StyleSheet.create({
  postImg: {
    height: Dimensions.get('screen').height / 3,
    width: Dimensions.get('screen').width,
    resizeMode: 'contain',
  },
});

export default PostImage;