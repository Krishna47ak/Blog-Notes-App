import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigator/navigator';
import { Provider } from './src/context/blog-context';

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
}