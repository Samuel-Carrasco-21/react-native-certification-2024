import { SafeAreaView, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
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
