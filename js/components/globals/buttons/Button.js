import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import colors from '../../../utils/colors';

const BannerButton = ({ color, onPress, title, right, middle}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableO}
        onPress={()=> {onPress()}}
        >
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={[styles.text]}>
              {title}
            </Text>
          </View>
          <View style={styles.boxMiddle}>
          {
            middle && 
            <Text style={[styles.middle]}>
                {middle && middle}
            </Text>
          }
          </View>
          <View style={styles.boxRight}>
          {
            right &&
            <Image
              resizeMode={Image.resizeMode.stretch}
              style={{ tintColor: 'white', height: 22, width: 13 }}
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
    backgroundColor: colors.main,
    paddingHorizontal: 20,
  },
  touchableO: {
    flex: 1,
    backgroundColor: colors.main,
    height: 45,
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    color: colors.body,
  },
  box: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  boxMiddle: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  boxRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  middle: {
    paddingTop: 1,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'left',
    color: colors.body,
  }
})

export default BannerButton;