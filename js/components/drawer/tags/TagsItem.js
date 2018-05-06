import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const TagsItem = ({ text, color, selected, onTap }) => {
  return (
    <TouchableOpacity 
      onPress={onTap}
      style={
        selected 
          ? [styles.container, styles.selected] 
          : [styles.container, styles.default]
        }>
      <View>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 25,
    height: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  selected: {
    backgroundColor: 'gold'
  },
  default: {
    backgroundColor: 'white',
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
  },
  text: {
    fontSize: 19,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center'
  },
});

export default TagsItem;