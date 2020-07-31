import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import Animation from '../screens/animation'

const Drawer = createDrawerNavigator();

export default ()=>(
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        // screenOptions={{
        //   headerTintColor:"#444",
        //   headerStyle:{
        //       backgroundColor: '#eee',
        //       height: 60,
        //   }
        // }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          // options={{ headerTitle: 'GameZone' }}
        />
        <Drawer.Screen 
          name="About" 
          component={AboutStack} 
          // options={{ headerTitle: 'Review Details' }}
        />
        <Drawer.Screen 
          name="Animation" 
          component={Animation} 
          // options={{ headerTitle: 'Review Details' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
)
