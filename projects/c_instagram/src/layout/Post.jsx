import { View, Text, StyleSheet } from "react-native";

import HeaderPostComponent from "../components/posts/HeaderPostComponent";
import PostImage from "../components/posts/ImagePostComponent";
import PostActions from "../components/posts/PostIcons";
import PostLikes from "../components/posts/PostLikes";
import PostText from "../components/posts/PostText";
import PostComments from "../components/posts/PostComments";
import PostPublishDate from "../components/posts/PostDateComponent";

const Post = () => {
  return (
    <View>
      <HeaderPostComponent />
      <PostImage />
      <PostActions />
      <PostLikes />
      <PostText />
      <PostComments />
      <PostPublishDate />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Post;
