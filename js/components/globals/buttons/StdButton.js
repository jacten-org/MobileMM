import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import colors from '../../../utils/colors';

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
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: colors.main,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
  },
  disabled: {
    backgroundColor: 'lightgrey',
  },
  text: {
    fontSize: 18,
    color: colors.body
  }
})

export default StdButton;