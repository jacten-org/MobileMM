import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import colors from '../../../utils/colors';

const Submit = ({onPress, title, color}) => {
  return(
  <View style={styles.container}>
    <TouchableOpacity 
      style={styles.button}
      onPress={()=> {onPress()}}
      >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 300,
    height: 30,
    margin: 10,
  },
  button: {
    flex: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.s1,
  },
  text: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.body
  }
})

export default Submit;