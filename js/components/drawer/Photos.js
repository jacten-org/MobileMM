import React, { Component } from 'react';
import { Text, Button, View, Image, TouchableOpacity } from 'react-native';

import X from './../globals/buttons/x';
// import ImagePicker from 'react-native-image-crop-picker';


class Photos extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: <X close={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 30, height: 30, tintColor: 'white'}}
          source={require('./../../icons/png-64px/pictures_64px.png')}
          > 
        </Image>
      ),
    }
  };

  // openImagePicker = async () => {
  //   try {
  //     let image = await ImagePicker.openPicker({
  //       width: 400,
  //       height: 400,
  //       cropping: true
  //     })
  //     console.log(image)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  render() {
    return (
      <View>
      </View>
    )
  }
}

export default Photos;