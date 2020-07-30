import React from 'react'
import { StyleSheet, ScrollView, Text, View,TextInput, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import { useFormik } from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/button'
import ErrorMessage from '../shared/errorMessage'

const ReviewSchema = yup.object().shape({
  title: yup.string()
        .required()
        .min(4),
  body: yup.string()
        .required()
        .min(8),
  rating: yup.string()
          .required()
          .test('is-num-1-5','Rating must be a number 1 - 5',(val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0
          })
})

 const ReviewForm = ({addReview}) => {
  const formProps = useFormik({
    initialValues:{
          title:'',
          body:'',
          rating:''
        },
    validationSchema:ReviewSchema,
    onSubmit:(vals,actions)=>{
      console.log("--onSubmit--");
      actions.resetForm()
      addReview(vals)
    }
  })
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formProps
  // console.log(values, errors, touched, handleSubmit, handleChange);
  // console.log(handleChange('body'));
  return (
    <ScrollView style={globalStyles.container}>
        <View>
          <TextInput 
            style={globalStyles.input} 
            placeholder="Review title" 
            onBlur={handleBlur('title')}
            onChangeText={handleChange('title')} 
            value={values.title}
          />
          <ErrorMessage
            {...formProps} 
            name="title"
          />
          
          <TextInput 
            multiline
            minHeight={60}
            style={globalStyles.input} 
            placeholder="Review body" 
            onBlur={handleBlur('body')}
            onChangeText={handleChange('body')} 
            value={values.body}
          />
          <ErrorMessage
            {...formProps} 
            name="body"
          />
          <TextInput 
            style={globalStyles.input} 
            placeholder="Rating (1-5)" 
            onBlur={handleBlur('rating')}
            onChangeText={handleChange('rating')} 
            value={values.rating}
            keyboardType='numeric'
          />
          <ErrorMessage
            {...formProps} 
            name="rating"
          />
          <FlatButton
            text="submit"
            color='maroon'
            onPress={handleSubmit}
          />
        </View>
    </ScrollView>
  )
}

// const styles = StyleSheet.create({})
export default ReviewForm
