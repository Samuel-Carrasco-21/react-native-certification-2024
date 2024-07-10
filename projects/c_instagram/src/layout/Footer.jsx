import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/PostScreen';
import ReelScreen from '../screens/ReelScreen';
import ProfileScreen from '../screens/ProfileScreen';
export const Footer = () => {
  return (
    <Tab.Navigator screenOptions={({route})=> ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopColor: '#999',
      },
    })}
      >
      <Tab.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
      <Tab.Screen name="Search" component={SearchScreen}  options={{headerShown: false}}/>
      <Tab.Screen name="Post" component={PostScreen}  options={{headerShown: false}}/>
      <Tab.Screen name="Reel" component={ReelScreen}  options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={ProfileScreen}  options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

function setIcon(route, routeStatus) {
  let iconName = "";
  if(route.name === "Home") {
    iconName = "home";
  }
  if(route.name === "Search") {
    iconName = "search";
  }
  if(route.name === "Post") {
    iconName = "plus-square";
  }
  if(route.name === "Reel") {
    iconName = "play-circle";
  }
  if(route.name === "Profile") {
    iconName = "user";
  }


  let color = 'white';
  return <AwesomeIcon name={iconName} size={18} color={color} />;
}