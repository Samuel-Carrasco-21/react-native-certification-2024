import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

import Header from '../layout/Header';
import Stories from '../layout/Stories';
import Post from '../layout/Post';

import { posts } from '../data/posts';
import { useEffect, useState } from 'react';

const HomeScreen = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    setPostsData(posts);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView >
          <Stories />
          <Divider style={styles.divider}/>
          {
            postsData.map((post, index) => {
              return (
                <Post key={index} post={post}></Post>
              )
            })
          }
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50
  },
  text: {
    color: 'white'
  },
  divider: {
    marginVertical: 10
  }
});
export default HomeScreen;
