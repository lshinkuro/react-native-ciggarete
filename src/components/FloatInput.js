import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import {wp,hp} from '../utils/responsive'

const FloatInput = (props) => {
    return (
        <View
          style={styles.container}>
          <TextInput
            placeholder={props.placeholder}
            value={props.username}
            placeholderTextColor="#ffffff"
            onChangeText={props.onChangeText}
          />
        </View>
    )
}

export default FloatInput

const styles = StyleSheet.create({
    container:{
        width: wp * 0.7,
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft:10,
        backgroundColor:'white'
      }
})
