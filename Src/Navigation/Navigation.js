import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-vector-icons/Ionicons';
import Home1 from '../Screen/Home1'
import Home2 from '../Screen/Home2'
import Home3 from '../Screen/Home3'
import Home4 from '../Screen/Home4'
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        
        <Tab.Screen name="Home1" component={Home1}options={{ tabBarBadge: 1 }} />
        <Tab.Screen name="Home2" component={Home2} />
        <Tab.Screen name="Home3" component={Home3} />
        <Tab.Screen name="Home4" component={Home4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}