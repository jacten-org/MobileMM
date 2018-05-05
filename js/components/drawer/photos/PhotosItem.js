import React from 'react';
import { Text, Button, View, Image, StyleSheet, TouchableOpacity, PixelRatio } from 'react-native';

const PhotosItem = ({ avatar, handlePhotoTap, image }) => {

  const type = avatar ? 'avatar' : 'smallImg'

  return (
    <TouchableOpacity onPress={handlePhotoTap}>
      <View style={[styles[type], styles.imageContainer]}>
      { 
        image === undefined 
        ? <Text>Select a Photo</Text> 
        : <Image style={styles[type]} source={{uri: image}} />
      }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderColor: 'white',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
  },
  avatar: {
    borderRadius: 150,
    width: 300,
    height: 300
  },
  smallImg: {
    borderRadius: 0,
    width: 140,
    height: 140,
  }
});

export default PhotosItem;