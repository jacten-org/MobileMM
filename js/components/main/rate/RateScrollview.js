import React, { Component } from 'react';
import { 
  Text, 
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

class RateScrollView extends Component {
  constructor() {
    super();
  }

  resetOffset = (event) => {
    this.imageScrollView.scrollTo({x: width, y: 0, animated: false})
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.card !== this.props.target) {
      this.imageScrollView && this.resetOffset();
      this.props.trackPhotoIndex()
    } 
  }

  componentDidMount = () => {
    this.imageScrollView.scrollTo({x: width, y: 0, animated: false})
    this.props.trackPhotoIndex()
  }

  onScrollEnd = (event) => {
    let currentIndex = Math.round(event.nativeEvent.contentOffset.x / width - 1)
    if (currentIndex === -1) {
      let destination = (width) * (this.props.photos.length)
      this.imageScrollView.scrollTo({x: destination, y: 0, animated: false})
      this.props.trackPhotoIndex(this.props.photos.length - 1)
    } else if (currentIndex === this.props.photos.length) {
      this.imageScrollView.scrollTo({x: width, y: 0, animated: false})
      this.props.trackPhotoIndex(0)
    } else {
      this.props.trackPhotoIndex(currentIndex)
    }
  }

  handlePhotoTap = () => {
    let computedOffset = (this.props.current + 2) * (width)
    this.imageScrollView.scrollTo({x: computedOffset, y: 0, animated: true})
  }

  render () {
    let { photos } = this.props;
    
    return (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEnabled={true}
          horizontal={true}
          onMomentumScrollEnd={this.onScrollEnd}
          ref={r => this.imageScrollView = r}
          >
          <Image
            style={styles.image}
            source={{uri: photos[photos.length - 1]}}
            />
          {
            photos.map((photo, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  key={index + photo}
                  style={styles.container}
                  onPress={this.handlePhotoTap}
                  >
                  <Image
                    style={styles.image}
                    source={{uri: photo}}
                    />
                </TouchableOpacity>
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

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: width,
  },
  image: {
    width: width,
    height: width,
  }
})

export default RateScrollView;