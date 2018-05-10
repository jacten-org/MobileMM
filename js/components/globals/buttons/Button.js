import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const BannerButton = ({ color, onPress, title, right}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableO}
        onPress={()=> {onPress()}}
        >
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={[styles.text, {color: color || 'white'}]}>
              {title}
            </Text>
          </View>
          <View style={styles.boxRight}>
          {
            right &&
            <Image
              resizeMode={Image.resizeMode.stretch}
              style={{ tintColor: 'white', height: 25, width: 15 }}
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
    flexDirection: 'row',
    // flex: 1,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
  },
  row: {
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#afd7b4',
    paddingHorizontal: 20,
  },
  touchableO: {
    flex: 1,
    backgroundColor: '#afd7b4',
    height: 45,
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  box: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  boxRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
})

export default BannerButton;