import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import colors from '../../../utils/colors';

class DotIndicator extends Component {
  constructor() {
    super();
  }


  render() {
    let { total, current } = this.props;

    let dots = [];

    for (let i = 0 ; i < total ; i++) {
      dots.push(
        i === current ?
        <Image
          key={i}
          style={styles.dot}
          source={require('../../../icons/circleFill.png')}
          /> :
        <Image
          key={i}
          style={styles.dot}
          source={require('../../../icons/circleHollow.png')}
          />
      )
    }

    return (
      <View style={styles.container}>
        {dots}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    height: 10,
    width: 10,
    tintColor: colors.s1,
    margin: 3,
  }
})

export default DotIndicator;