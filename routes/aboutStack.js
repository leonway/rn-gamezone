import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about'
import Header from '../shared/header'

const Stack = createStackNavigator();

export default ()=>(
    <Stack.Navigator 
        initialRouteName="About"
        screenOptions={{
          headerTintColor:"#444",
          headerStyle:{
              backgroundColor: '#eee',
              height: 60,
          }
        }}
      >
        <Stack.Screen 
          name="About" 
          component={About} 
          options={{ header: (...data)=><Header title="About GameZone"/> }}
        />
      </Stack.Navigator>
)
