import React, { Component } from 'react';
import { 
  Text, 
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Slider,
} from 'react-native';

import ImageScrollView from './ImageScrollview';
import BannerButton from '../../globals/buttons/Button';
import turnBirthdayIntoAge from '../../../utils/turnBirthdayIntoAge';

class RateItem extends Component {
  constructor() {
    super();
  }

  render () {
    let { 
      ratee, 
      rating, 
      handleSlider, 
      handleSubmitRating,
    } = this.props;
    
    let realAge = turnBirthdayIntoAge(ratee.age);

    return (
      <View style={styles.container}>
          <ImageScrollView
            photos={ratee.photos}
            />
          <Text style={styles.name}>
            {ratee.firstname 
              + ' ' +
            ratee.lastname[0]}
          </Text>
          <Text style={styles.text}>
          {realAge} years old
          </Text>
          <View style={styles.tags}>
            <Text style={styles.text}>
              {ratee.tags[0]} 
            </Text>
            <Text style={styles.text}>
              {ratee.tags[1]} 
            </Text>
            <Text style={styles.text}>
              {ratee.tags[2]} 
            </Text>
          </View>
          <Text style={styles.text}>
          {`"${ratee.bio}"`}
          </Text>
          <Text style={styles.rating}>
            {rating}
          </Text>
          <Slider
            style={styles.slider}
            step={1}
            value={5}
            maximumValue={10}
            minimumValue={0}
            onValueChange={(rating) => handleSlider(rating)}
            />
          <BannerButton
            onPress={handleSubmitRating}
            title='Next'
            />
        </View>
    )
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b77977',
    flex: 1,
    width: width,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  name: {
    color: 'white',
    fontWeight: '400',
    fontSize: 24,
  },
  tags: {
    flexDirection: 'row',
  },
  slider: {
    width: width,
  },
  rating: {
    fontSize: 24,
    justifyContent: 'center',
    color: 'white',
    fontWeight: '900'
  },
  image: {
    width: width, 
    height: width,
  }
})

export default RateItem;