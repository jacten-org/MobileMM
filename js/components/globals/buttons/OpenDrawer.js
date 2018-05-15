import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import colors from '../../../utils/colors';

const OpenDrawer = ({onTouch}) => {

  return(
  <TouchableOpacity onPress={() => onTouch()}>
    <Image
      style={{margin: 5, width: 30, height: 30, tintColor: 'white'}}
      source={require('./../../../icons/png-64px/drawer.png')}
      />
  </TouchableOpacity>
  )
}

export default OpenDrawer;