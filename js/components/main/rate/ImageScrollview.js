import React, { Component } from 'react';
import { 
  Text, 
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

class ImageScrollView extends Component {
  constructor() {
    super();
  }

  onScrollEnd = (event) => {
    let { length } = this.props.photos;
    if (event.nativeEvent.contentOffset.x / width === 0) {
      this.refs.imageScrollView.scrollTo({x: width * length, y: 0, animated: false})
    } else if (event.nativeEvent.contentOffset.x / width === length + 1) {
      this.refs.imageScrollView.scrollTo({x: width, y: 0, animated: false})
    }
  }

  render () {
    const { photos } = this.props;
    return (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          pagingEnabled={true}
          scrollEnabled={true}
          horizontal={true}
          ref='imageScrollView'
          onMomentumScrollEnd={this.onScrollEnd}
          contentOffset={{x: width, y: 0}}
          >
          <Image
            style={styles.image}
            source={{uri: photos[photos.length - 1]}}
            />
          {
            photos.map((photo, index) => {
              return (
              <Image
                style={styles.image}
                source={{uri: photo}}
                key={index}
                />
              )
            })
          }
          <Image
            style={styles.image}
            source={{uri: photos[0]}}
            />
        </ScrollView>
    )
  }

};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: width,
  },
  image: {
    width: width,
    height: width,
  }
})

export default ImageScrollView;