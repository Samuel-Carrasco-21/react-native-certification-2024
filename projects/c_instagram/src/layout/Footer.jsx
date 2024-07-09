import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
import HomeScreen from '../screens/HomeScreen';
export const Footer = () => {
  return (
    <Tab.Navigator screenOptions={({route})=> ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopColor: 'gray',
      },
    })}
      >
      <Tab.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

function setIcon(route, routeStatus) {
  let iconName = "home";
  let color = 'white';
  return <AwesomeIcon name="home" size={24} color={color} />;
}