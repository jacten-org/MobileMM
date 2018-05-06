import React from 'react';
import { Text, Button, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


  // const starColor = starred ? '#f1c40f' : 'white';

const SelectedHolder = ({tags}) => { 

  return (
    <View style={styles.container}>
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
    flexDirection: 'row',
    height: 90,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 5,
  },
  tag: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
  },
  text: {
    textAlign: 'center',
  }
})


export default SelectedHolder;