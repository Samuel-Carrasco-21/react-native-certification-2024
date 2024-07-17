import { Footer } from "../layout/Footer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tab" component={Footer} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
