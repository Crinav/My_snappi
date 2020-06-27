import * as React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes.js'

export default function App() {
  
  return (
    <NavigationContainer>
      
       
          <Routes />
       
      
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
    
  }
});
