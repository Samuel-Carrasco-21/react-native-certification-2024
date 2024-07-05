import { ScrollView, StyleSheet  } from "react-native";
import StoryComponent from "../components/stories/Story";
const Stories = () => {
  return (
    <ScrollView horizontal style={styles.stories}> 
        <StoryComponent />
        <StoryComponent />
        <StoryComponent />
        <StoryComponent />
        <StoryComponent />
        <StoryComponent />
        <StoryComponent />
        <StoryComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    stories: {
        flexDirection: 'row',
    }
});
export default Stories;
