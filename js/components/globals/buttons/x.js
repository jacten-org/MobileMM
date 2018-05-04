import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const X = (props) => {
  return(
  <TouchableOpacity onPress={()=> {props.close()}}>
    <Image
      style={{width: 30, height: 30, tintColor: 'white'}}
      source={require('./../../../icons/png-64px/whiteClose.png')}
      > 
    </Image>
  </TouchableOpacity>

  )
}

export default X;