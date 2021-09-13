import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigators/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, Platform } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        // backgroundColor='black'
        barStyle= {Platform.OS === 'ios' ? 'dark-content' : null }
      />
      <NavigationContainer>
          <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;

