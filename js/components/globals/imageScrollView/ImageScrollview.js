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

class ImageScrollView extends Component {
  constructor() {
    super();
  }

  resetOffset = (event) => {
    this.imageScrollView.scrollTo({x: this.props.width, y: 0, animated: false})
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.card !== this.props.target) {
      this.imageScrollView && this.resetOffset();
      this.props.trackPhotoIndex()
    }
  }

  componentDidMount = () => {
    this.imageScrollView.scrollTo({x: this.props.width, y: 0, animated: false})
    this.props.trackPhotoIndex()
  }

  onScrollEnd = (event) => {
    let currentIndex = Math.round(event.nativeEvent.contentOffset.x / (this.props.width) - 1)
    if (currentIndex === -1) {
      let destination = (this.props.width) * (this.props.photos.length)
      this.imageScrollView.scrollTo({x: destination, y: 0, animated: false})
      this.props.trackPhotoIndex(this.props.photos.length - 1)
    } else if (currentIndex === this.props.photos.length) {
      this.imageScrollView.scrollTo({x: this.props.width, y: 0, animated: false})
      this.props.trackPhotoIndex(0)
    } else {
      this.props.trackPhotoIndex(currentIndex)
    }
  }

  handlePhotoTap = () => {
    let computedOffset = (this.props.current + 2) * (this.props.width)
    this.imageScrollView.scrollTo({x: computedOffset, y: 0, animated: true})
  }

  render () {
    let { photos, width, height } = this.props;

    let styleObj = { width, height }
    
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
          style={styleObj}
          source={{uri: photos[photos.length - 1]}}
          />
        {
          photos.map((photo, index) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                key={index + photo}
                style={styleObj}
                onPress={this.handlePhotoTap}
                >
                <Image
                  style={styleObj}
                  source={{uri: photo}}
                  />
              </TouchableOpacity>
            )
          })
        }
        <Image
          style={styleObj}
          source={{uri: photos[0]}}
          />
      </ScrollView>
    )
  }
};

export default ImageScrollView;