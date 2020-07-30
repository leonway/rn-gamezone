 import React from 'react';
 import { Text } from 'react-native'
 import { globalStyles } from '../styles/global.js'
 
 const ErrorMessage = props => {
  //  console.log();
   const name = props.name
   const error = props.errors[name];
   const touch = props.touched[name];
    
    return (<Text style={globalStyles.errorText}>
            {touch && error ? error : null}
          </Text>)
 };
 
 export default ErrorMessage;
