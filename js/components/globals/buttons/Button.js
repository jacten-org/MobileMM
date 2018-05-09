import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const Button = ({ color, onPress, title, right}) => {
  return(
    <View style={styles.container}>
    <TouchableOpacity 
      style={styles.touchableO}
      onPress={()=> {onPress()}}
      >
      <View style={styles.row}>
        <View style={styles.box}/>
        <View style={styles.box}>
          <Text style={[styles.text, {color: color || 'white'}]}>
            {title}
          </Text>
        </View>
        <View style={styles.box}>
        {
          right &&
        <Image
          style={{width: 20, height: 35, tintColor: 'white'}}
          source={require('./../../../icons/arrowRight.png')}
          /> 
        }
        </View>
        </View>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 60,
    backgroundColor: '#afd7b4',
    borderRadius: 5,
  },
  row: {
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#afd7b4',
  },
  touchableO: {
    width: 300,
    height: 60,
  },
  text: {
    fontSize: 23,
    textAlign: 'center'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Button;