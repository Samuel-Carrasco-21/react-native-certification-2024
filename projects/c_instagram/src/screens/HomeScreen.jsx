import { SafeAreaView, Text, StyleSheet } from 'react-native';

import Header from '../layout/Header';
import Stories from '../layout/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
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
  }
});
export default HomeScreen;
