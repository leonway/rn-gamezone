import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList, Modal, Animated, Easing, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from "../styles/global"
import Card from '../shared/card'
import { Icon } from '@ui-kitten/components';
import ReviewForm from './reviewForm'

const AIcon = Animated.createAnimatedComponent(Icon)
 let opacity = new Animated.Value(0);
  const animate = easing => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      useNativeDriver:false,
      toValue: 1,
      duration: 1200,
      easing
    }).start();
  };
  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80]
  });
  const animatedStyles = [
    // styles.box,
    {
      opacity,
      width: size,
      height: size
    }
  ];

export default function Home({ navigation }) {
  const [modalOpen,setModalOpen] = useState(false)
  const [ reviews, setReviews ] = useState([
    {title:'Zelda, Breath of Fresh Air', rating:5, body:'lorem ipsum', key:'1'},
    {title:'Gotta Catch Them All (again)', rating:4, body:'lorem ipsum', key:'2'},
    {title:'Not So "Final" Fantasy', rating:3, body:'lorem ipsum', key:'3'},
  ])
  
  const addReview = (review)=>{
    review.key = Math.random().toString()
    setReviews((currentReviews)=>{
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={s.modalContent}>
            <AIcon name="close" style={[s.modalToggle,s.modalClose,animatedStyles]} fill="black" onPress={()=>setModalOpen(false)}/>
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Icon name="plus-square-outline" style={s.modalToggle} fill="black" onPress={()=>{
        setModalOpen(true)
          animate(Easing.inOut(Easing.elastic(1)))
      }}/>
      <FlatList 
        data = {reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
            <Card>
              <Text style={globalStyles.titleText}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const s = StyleSheet.create({
  modalContent:{
    flex: 1,
  },
  modalToggle:{
    width:30,
    height: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose:{
    marginTop: 20,
    marginBottom: 0,
  },
})
