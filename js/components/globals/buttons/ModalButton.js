import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const ModalButton = ({onPress, title, color}) => {
  return(
  <View style={styles.container}>
    <TouchableOpacity 
      style={styles.button}
      onPress={()=> {onPress()}}
      >
      <Text style={[styles.text, {color: color || 'white'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'slategrey',
    padding: 13,
  },
  text: {
    fontSize: 23,
  }
})

export default ModalButton;