import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

import Header from '../layout/Header';
import Stories from '../layout/Stories';
import Post from '../layout/Post';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView >
          <Stories />
          <Divider style={styles.divider}/>
          <Post></Post>
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
