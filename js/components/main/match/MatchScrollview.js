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

class MatchScrollView extends Component {
  constructor() {
    super();
  }

  resetOffset = (event) => {
    this.refs.imageScrollView.scrollTo({x: width / 2, y: 0, animated: false})
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate',this.props.card, this.props.target)
    if (this.props.card !== this.props.target) {
      console.log('reset')
      this.refs.imageScrollView && this.resetOffset();
      this.props.trackPhotoIndex(0)
    }
  }

  componentDidMount = () => {
    this.refs.imageScrollView.scrollTo({x: width / 2, y: 0, animated: false})
    this.props.trackPhotoIndex(0)
  }

  onScrollEnd = (event) => {
    let currentIndex = Math.round(event.nativeEvent.contentOffset.x / (width / 2) - 1)
    // console.log('in onScrollEnd', currentIndex)
    if (currentIndex === -1) {
      let destination = (width / 2) * (this.props.photos.length)
      this.refs.imageScrollView.scrollTo({x: destination, y: 0, animated: false})
      this.props.trackPhotoIndex(this.props.photos.length - 1)
    } else if (currentIndex === this.props.photos.length) {
      this.refs.imageScrollView.scrollTo({x: width / 2, y: 0, animated: false})
      this.props.trackPhotoIndex(0)
    } else {
      this.props.trackPhotoIndex(currentIndex)
    }
  }

  handlePhotoTap = () => {
    let computedOffset = (this.props.current + 2) * (width / 2)
    this.refs.imageScrollView.scrollTo({x: computedOffset, y: 0, animated: true})
  }



  render () {
    let { photos, current } = this.props;
    
    // console.log(current)
    
    return (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          pagingEnabled={true}
          scrollEnabled={true}
          horizontal={true}
          onMomentumScrollEnd={this.onScrollEnd}
          ref='imageScrollView'
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

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: width / 1.5,
  },
  image: {
    width: width / 2, 
    height: width / 1.5,
  },
})

export default MatchScrollView;