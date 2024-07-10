import { View, Text, StyleSheet, TextInput } from "react-native";
import Ionic from 'react-native-vector-icons/Ionicons';
export const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionic name='search' style={styles.searchIcon}/>
      <TextInput 
            placeholder='Search'
            placeholderTextColor="#909090"
            style={{
            width: '94%',
            height: 40,
            backgroundColor: '#EFEFEF',
            borderRadius: 10,
            paddingLeft: 50,
            fontSize: 18
        }}/>

    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
    },
    searchIcon: {
        fontSize: 20,
        color: 'black',
        opacity: 0.5,
        position: 'absolute',
        left: 25,
        zIndex: 1
    }
});
