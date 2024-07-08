import {View, Image, Text, StyleSheet} from 'react-native';

const StoryComponent = ({story}) => {
    return (
        <View style={{flexDirection: 'column', alignContent: 'center'}}>
        <Image 
            source={{uri:story.image}}
            style={styles.story} 
        />
        <Text style={styles.personText}>{story.name}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    story: {
        width: 57,
        height: 57,
        borderRadius: 60,
        borderColor: 'red',
        borderWidth: 3,
        marginRight: 10
    },
    personText: {
        color: 'white',
        textAlign: 'center',
        marginRight: 10
    }
});
export default StoryComponent;