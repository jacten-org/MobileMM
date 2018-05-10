import React from 'react';
import { Text, Button, View, Image, StyleSheet, TouchableHighlight } from 'react-native';


  // const starColor = starred ? '#f1c40f' : 'white';

const SelectedHolder = ({ tags, route, onTap }) => { 

  const shadow =  {
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowColor: 'grey',
    shadowOffset: { height: 3, width: 3 },
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          { route === 'You' ? 'I am a...' : 'My ideal match is a...' }
        </Text>
      </View>
      <View style={styles.selectedBox}>
        <TouchableHighlight
          underlayColor='#b7dbbb'
          style={[styles.tag, tags[0] && shadow]}
          onPress={() => {tags[0] && onTap(route, true, tags[0])}}
          >
          <Text style={styles.text}>
            {tags[0]}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          underlayColor='#b7dbbb'
          style={[styles.tag, tags[1] && shadow]}
          onPress={() => {tags[1] && onTap(route, true, tags[1])}}
          >
          <Text style={styles.text}>
            {tags[1]}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={()=>{}}
          underlayColor='#b7dbbb'
          style={[styles.tag, tags[2] && shadow]}
          onPress={() => {tags[2] && onTap(route, true, tags[2])}}
          >
          <Text style={styles.text}>
            {tags[2]}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'column',
    height: 110,
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
    padding: 3,
    margin: 3,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
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