import React, { Component } from 'react';
import { 
  Text, 
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

class MatchScrollView extends Component {
  constructor() {
    super();
  }

  resetOffset = (event) => {
    this.refs.imageScrollView.scrollTo({x: 0, y: 0, animated: false})
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.card !== this.props.target) {
      this.refs.imageScrollView && this.refs.imageScrollView.scrollTo({x: 0, y: 0, animated: false})
    }
  }




  render () {
    let { photos } = this.props;
    
    return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
          pagingEnabled={true}
          scrollEnabled={true}
          horizontal={false}
          onMomentumScrollEnd={this.onScrollEnd}
          snapToAlignment={'start'}
          ref='imageScrollView'
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
    height: width / 1.5,
  },
  image: {
    width: width / 2, 
    height: width / 1.5,
  },
})

export default MatchScrollView;