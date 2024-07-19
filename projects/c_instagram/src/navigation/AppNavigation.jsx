import { Footer } from "../layout/Footer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentProfile from "../screens/StudentProfile";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tab" component={Footer} />
      <Stack.Screen name="studentProfile" component={StudentProfile} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
