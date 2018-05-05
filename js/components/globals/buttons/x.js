import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

const X = ({ onTap , circle }) => {
  return(
  <TouchableOpacity onPress={()=> {onTap()}}>
    <View style={
      circle && 
      {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: 'grey',
        justifyContent:'center',
        alignItems: 'center',
      }
    }>
      <Image
        style={
          [{
            margin: 5, 
            width: 30, 
            height: 30, 
            tintColor: 'white'
          },
          circle && {
            borderRadius: 17,
          }
          ]}
        source={require('./../../../icons/png-64px/whiteClose.png')}
        > 
      </Image>
    </View>
  </TouchableOpacity>

  )
}

export default X;