import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Avatar = (props) => {

  const {
    small,
    medium, 
    large, 
    xlarge,
    source,
    round
  } = props;

  let { width, height } = props;

  let radius;

  if (small) {
    width = 40;
    height = 40;
  } else if (medium) {
    width = 60;
    height = 60;
  } else if (large) {
    width = 75;
    height = 75;
  } else if (xlarge) {
    width = 150;
    height = 150;
  } else if (!width && !height) {
    width = 34;
    height = 34;
  } else if (!width) {
    width = height;
  } else if (!height) {
    height = width;
  }

  if (round) {
    radius = width / 2
  } else {
    radius = 0
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      width: width,
      height: height,
      borderRadius: radius,
      overflow: 'hidden',
    },
    avatar: {
      width: width || 34,
      height: height || 34,
      overflow: 'hidden',
    },
    overlayContainer: {
      borderRadius: radius,
      width: width+2,
      height: height+2,
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
    },
  });

  return(
    <View style={styles.overlayContainer}>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={source}
          >
        </Image> 
      </View>
    </View>
  )
}

export default Avatar;