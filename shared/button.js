import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function button({text,onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={s.button}>
        <Text style={s.buttonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  button:{
    borderRadius: 8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor: '#f01d71',
  },
  buttonText:{
    color:'white',
    fontWeight: 'bold',
    textTransform:'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
})
