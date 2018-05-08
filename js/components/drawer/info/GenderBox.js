import React from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native';

const GenderBox = (props) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        style={styles.button}
        onPress={()=>{console.log('butt')}}
        underlayColor='lightgreen'
        >
        <Text>
          female
        </Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={styles.button}
        onPress={()=>{console.log('butt')}}
        underlayColor='lightgreen'
        >
        <Text>
          male
        </Text>
      </TouchableHighlight>
      <TouchableHighlight 
        style={styles.button}
        onPress={()=>{console.log('butt')}}
        underlayColor='lightgreen'
        >
        <Text>
          other
        </Text>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    width: 60,
    height: 40,
    flex: 1,
    margin: 5,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: '#afd7b4',
  },
  container: {
    width: 310,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default GenderBox;