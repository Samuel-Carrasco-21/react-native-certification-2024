import { View, Text, FlatList, StyleSheet } from "react-native";
import { Avatar, Chip } from "react-native-elements";

import { Card } from "react-native-elements/dist/card/Card";
import { SafeAreaView } from "react-native-safe-area-context";

const STUDENTS = [
  {
    id: "1",
    title: "Adrian",
  },
  {
    id: "2",
    title: "Mateo",
  },
  {
    id: "3",
    title: "Brenda",
  },
  {
    id: "4",
    title: "Mishel",
  },
  {
    id: "5",
    title: "Alexia",
  },
];
const ReelScreen = () => {
  const StudentViewItem = ({ item }) => {
    console.log("=======>", item);
    const { title } = item;
    return (
      <Card>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <Avatar
              size={64}
              rounded
              source={{
                uri: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.nameText}>{title}</Text>
              <Chip
                title="Follow"
                containerStyle={{ marginVertical: 15, width: 80}}
              />
            </View>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={STUDENTS}
        renderItem={StudentViewItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  avatarContainer: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10
  }
});
export default ReelScreen;
