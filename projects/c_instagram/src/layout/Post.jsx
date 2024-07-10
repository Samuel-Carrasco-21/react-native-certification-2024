import { View, Text, StyleSheet } from "react-native";

import HeaderPostComponent from "../components/posts/HeaderPostComponent";
import PostImage from "../components/posts/ImagePostComponent";
import PostActions from "../components/posts/PostIcons";
import PostLikes from "../components/posts/PostLikes";
import PostText from "../components/posts/PostText";
import PostComments from "../components/posts/PostComments";
import PostPublishDate from "../components/posts/PostDateComponent";

const Post = ({post}) => {
  const { user, imageUrl, liked, likes, likesUsers, text} = post;
  return (
    <View>
      <HeaderPostComponent user={user}/>
      <PostImage imageUrl= {imageUrl} />
      <PostActions liked={liked}/>
      <PostLikes numberLikes={likes} users={likesUsers}/>
      <PostText user={user} textPost={text}/>
      <PostComments />
      <PostPublishDate />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Post;
