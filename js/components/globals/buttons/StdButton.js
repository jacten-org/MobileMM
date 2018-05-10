import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const StdButton = ({ onPress, title, disabled }) => {
  return(
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      onPress={() => {!disabled ? onPress() : null}}
      style={[styles.container, disabled ? styles.disabled : styles.active]}
      >
        <Text style={styles.text}>
          {title}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#afd7b4',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
  },
  disabled: {
    backgroundColor: 'lightgrey',
  },
  text: {
    color: 'white'
  }
})

export default StdButton;