import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigators/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        // backgroundColor='black'
        // barStyle='dark-content'
      />
      <NavigationContainer>
          <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;

