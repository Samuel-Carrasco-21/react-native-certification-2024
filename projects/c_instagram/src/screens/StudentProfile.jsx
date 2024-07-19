import { useRoute } from "@react-navigation/native";
import { SafeAreaView, Text, View } from "react-native";

const StudentProfile = () => {
  const { params } = useRoute();
  // id
  
  const {name} = params;
  console.log(params);
  return (
    <SafeAreaView>
      <Text>Student Profile {name}</Text>
    </SafeAreaView>
  );
};
export default StudentProfile;
