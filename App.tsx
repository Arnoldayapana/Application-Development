import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/HomeScreen';
import WelcomeScreen from './app/WelcomeScreen';
import EncryptScreen from './app/EncryptScreen';
import DecryptScreen from './app/DecryptScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}/>

        <Stack.Screen 
          name="Home"
          component={HomeScreen} 
          options={{ headerShown: false }}/>

      <Stack.Screen 
          name="Encrypt"
          component={EncryptScreen}
          options={{ headerShown: false }}/>

      <Stack.Screen 
          name="Decrypt"
          component={DecryptScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}