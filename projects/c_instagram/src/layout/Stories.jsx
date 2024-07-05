import { View, Image, StyleSheet  } from "react-native";
import iconLogo from '../assets/icon.png';
const Stories = () => {
  return (
    <View style={styles.stories}> 
        <Image 
            source={iconLogo} 
            style={styles.story} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
    story: {
        width: 57,
        height: 57,
        borderRadius: 60,
        borderColor: 'red',
        borderWidth: 3,
    },
    stories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
export default Stories;
