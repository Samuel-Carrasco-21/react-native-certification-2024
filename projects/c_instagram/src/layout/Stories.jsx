import { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import StoryComponent from "../components/stories/Story";
// simulate api call async
import { stories } from "../data/stories";
const Stories = () => {
  const [storyData, setStoryData] = useState([]);
  useEffect(() => {
    // simulate data calling from api
    setStoryData(stories);
  }, []);

  return (
    <ScrollView horizontal style={styles.stories}>
      {storyData &&
        storyData.map((story) => (
          <StoryComponent key={story.id} story={story} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stories: {
    flexDirection: "row"
  },
});
export default Stories;
