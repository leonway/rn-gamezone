import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

export default function header({title}) {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <ImageBackground style={s.header} source={require('../assets/game_bg.png')}>
        <Icon name="menu" style={s.icon} fill={"black"} onPress={openMenu} />
        <View style={s.content}>
            <Image source={require('../assets/heart_logo.png')} style={s.headerImage} />
            <Text style={s.headerText}>
              {title}
            </Text>
        </View>
    </ImageBackground>
  )
}

const s = StyleSheet.create({
  header:{
    // flex: 1,
    width:"100%",
    height: 60,
    // margin:0,
    // padding:0,
    // borderColor:'green',
    // borderWidth: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon:{
    width:40,
    height: 40,
    marginLeft: 10,
  },
  content:{
    flex:1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerImage:{
    marginHorizontal: 10,
    width:26,
    height: 26,
  }
})
