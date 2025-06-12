/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {ProgressScreen} from '../screens/progress/ProgressScreen';
import {Text} from 'react-native-paper';
import {NutritionScreen} from '../screens/nutrition/NutritionScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Text>▓</Text>,
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarIcon: () => <Text>↕</Text>,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={NutritionScreen}
        options={{
          tabBarIcon: () => <Text>§</Text>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Text>☺</Text>,
        }}
      />
    </Tab.Navigator>
  );
};
