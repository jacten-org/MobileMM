import React from 'react';
import { Text, Button, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


  // const starColor = starred ? '#f1c40f' : 'white';

const SelectedHolder = ({tags, route}) => { 

  const shadow =  {
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowColor: 'grey',
    shadowOffset: { height: 3, width: 3 },
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          { route === 'You' ? 'I am a...' : 'I want a...' }
        </Text>
      </View>
      <View style={styles.selectedBox}>
        <View style={[styles.tag, !tags[0] && shadow]}>
          <Text style={styles.text}>
            {tags[0]}
          </Text>
        </View>
        <View style={[styles.tag, !tags[1] && shadow]}>
          <Text style={styles.text}>
            {tags[1]}
          </Text>
        </View>
        <View style={[styles.tag, !tags[2] && shadow]}>
          <Text style={styles.text}>
            {tags[2]}
          </Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'column',
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#afd7b4',
    padding: 10,
  },
  tag: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afd7b4',
    borderWidth: 1,
    borderColor: '#afd7b4',
    padding: 1,
    margin: 3,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  }, 
  headerText: {
    fontSize: 23,
    fontWeight: '300'
  },
  header: {
    flex:1,
    padding: 10,
  },
  selectedBox: {
    flex: 1,
    flexDirection: 'row',
  }
})


export default SelectedHolder;