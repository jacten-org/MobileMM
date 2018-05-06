import React from 'react';
import { Text, Button, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


  // const starColor = starred ? '#f1c40f' : 'white';

const SelectedHolder = ({tags}) => { 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          I am a...
        </Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.text}>
          {tags[0]}
        </Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.text}>
          {tags[1]}
        </Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.text}>
          {tags[2]}
        </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    height: 90,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 0 },
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  tag: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  text: {
    textAlign: 'center',
  }, 
  header: {
    flex:1,
    margin: 10,
  }
})


export default SelectedHolder;