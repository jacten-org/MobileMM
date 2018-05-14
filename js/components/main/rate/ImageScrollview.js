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
    this.refs.imageScrollView.scrollTo({x: 0, y: 0, animated: true})
  }

  onRender = () => {
    console.log(this.refs.imageScrollView)
  }




  render () {
    let { photos } = this.props;

    this.onRender();
    
    return (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          pagingEnabled={true}
          scrollEnabled={true}
          horizontal={true}
          onMomentumScrollEnd={this.onScrollEnd}
          snapToAlignment={'start'}
          >
          {
            photos.map((photo, index) => {
              return (
              <Image
                style={styles.image}
                source={{uri: photo}}
                key={index + photo}
                />
              )
            })
          }
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