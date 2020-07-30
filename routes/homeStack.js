import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'


const Stack = createStackNavigator();

export default ()=>(
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          // headerTitle:(...data)=>{
          //   console.log(data);
          //   return<Header/>
          // },
          headerTintColor:"#444",
          headerStyle:{
              backgroundColor: '#eee',
              height: 60,
              // padding:0,
              // margin: 0,
          },
          // headerBackground:{
          //     backgroundColor: '#9608ef',
          //     height: 60,
          //     // padding:0,
          //     // margin: 0,
          //     // borderWidth: 2,
          //     // borderColor:'#07f139',
          // },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ header: (...data)=><Header title="GameZone"/> }}
        />
        <Stack.Screen 
          name="ReviewDetails" 
          component={ReviewDetails} 
          options={{ headerTitle: "ReviewDetails" }}
        />
      </Stack.Navigator>
)
