// In App.js in a new project
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import StackScreen from './screens/StackScreen';
import { navigationRef } from './src/components/RootNavigation';

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackScreen />
    </NavigationContainer>
  );
}
export default App