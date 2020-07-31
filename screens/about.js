import React from 'react'
import { StyleSheet, Text, Button, View, Share } from 'react-native'
import { globalStyles } from "../styles/global"

export default function About() {
  const onShare = async()=>{
      try {
      const result = await Share.share({
        message:'我是message',
        dialogTitle:'我是dialogTitle',
        title:'我是title'
      });
      console.log(result);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Screen</Text>
      <Button title='share' onPress={onShare} />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container:{
//     padding: 24
//   }
// })
