import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import{wp} from '../utils/responsive';
const FloatButton = (props) => {
    return (
        <TouchableOpacity
        style={{
          width: wp * 0.7,
          backgroundColor: '#40b3d8',
          alignItems: 'center',
          borderRadius: 10,
          justifyContent: 'center',
          height: 40,
        }}
        onPress={props.onPress}>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    )
}

export default FloatButton

