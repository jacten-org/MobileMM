import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import colors from '../../../utils/colors';

const Vote = ({ onPress, title, color, negative }) => {
  return(
  <View style={styles.container}>
    <TouchableOpacity 
      style={[styles.button, negative && styles.negative]}
      onPress={()=> {onPress()}}
      >
      <Text style={[styles.text, negative && {color: colors.s2}]}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 45,
    width: 160,
    margin: 10,
  },
  button: {
    flex: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.s2,
  },
  negative: {
    backgroundColor: colors.body,
    borderWidth: 2,
    borderColor: colors.s2,
  },
  text: {
    fontSize: 23,
    fontWeight: '600',
    color: colors.body
  }
})

export default Vote;