/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {GoalScreen} from '../screens/intro/GoalScreen';
import {GenderScreen} from '../screens/intro/GenderScreen';
import {BottomTabNavigator} from './BottomTabNavigator';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="GoalScreen" component={GoalScreen} />
      <Stack.Screen name="GenderScreen" component={GenderScreen} />
    </Stack.Navigator>
  );
};
