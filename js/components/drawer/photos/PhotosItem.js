import React from 'react';
import { Text, Button, View, Image, StyleSheet, TouchableOpacity, PixelRatio } from 'react-native';

const PhotosItem = ({ avatar, selectPhotoTapped, image }) => {

  const type = avatar ? 'avatar' : 'smallImg'

  return (
    <TouchableOpacity onPress={selectPhotoTapped}>
      <View style={[styles[type], styles.imageContainer]}>
      { image === null ? <Text>Select a Photo</Text> :
        <Image style={styles[type]} source={image} />
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
  },
  avatar: {
    borderRadius: 150,
    width: 300,
    height: 300
  },
  smallImg: {
    borderRadius: 10,
    width: 140,
    height: 140,
  }
});

export default PhotosItem;