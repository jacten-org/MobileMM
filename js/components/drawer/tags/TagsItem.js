import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const TagsItem = ({ text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 10,
    height: 80,
    backgroundColor: 'slategrey',
    margin: 5,
  },
  text: {
    color: 'white',
  },
});

export default TagsItem;