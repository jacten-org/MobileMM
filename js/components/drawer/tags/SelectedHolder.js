import React from 'react';
import { Text, Button, View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import colors from '../../../utils/colors';

const SelectedHolder = ({ tags, route, onTap }) => { 

  const shadow =  {
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: colors.text,
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
          underlayColor={colors.body}
          style={[styles.tag, tags[0] && shadow]}
          onPress={() => {tags[0] && onTap(route, true, tags[0])}}
          >
          <Text style={styles.text}>
            {tags[0]}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          underlayColor={colors.body}
          style={[styles.tag, tags[1] && shadow]}
          onPress={() => {tags[1] && onTap(route, true, tags[1])}}
          >
          <Text style={styles.text}>
            {tags[1]}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={()=>{}}
          underlayColor={colors.body}
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
    borderLeftWidth: 3,
    borderColor: colors.s5,
    padding: 10,
  },
  tag: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.s5,
    padding: 3,
    margin: 3,
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    color: colors.body,
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