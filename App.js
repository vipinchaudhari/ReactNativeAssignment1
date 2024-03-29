/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import weather from './src/screen/weather';
import profile from './src/screen/profile';
import setCity from './src/screen/setCity'
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={"Weather"} drawerType="slide" backBehavior={'initialRoute'}>
        <Drawer.Screen name="Weather" component={weather} />
        <Drawer.Screen name="Set City" component={setCity} />
        <Drawer.Screen name="Profile" component={profile} />
      </Drawer.Navigator>
    </NavigationContainer>)
};

export default App
