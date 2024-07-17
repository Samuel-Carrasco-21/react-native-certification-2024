
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../auth/LoginScreen";
import SignUpScreen from "../auth/SignUpScreen";
import ForgotPasswordScreen from "../auth/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
      <Stack.Screen name="forgot" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
