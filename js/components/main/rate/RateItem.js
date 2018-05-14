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
import colors from '../../../utils/colors';

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

    if (ratee) {
      let realAge = turnBirthdayIntoAge(ratee.age);
  
      return (
        <View style={styles.container}>
          <View style={styles.imageHolder}>
            <Image
              style={styles.image}
              source={{uri: ratee.photos[0]}}
              />
          </View>
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
              {rating || `${ratee.firstname} is a...`}
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
              title='Submit'
              />
          </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.name}>
            No more people to rate!
          </Text>
        </View>
      )
    }
    
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.body,
    flex: 1,
    width: width,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: colors.text,
    fontWeight: 'bold'
  },
  name: {
    color: colors.text,
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
    color: colors.text,
    fontWeight: '500'
  },
  image: {
    width: width, 
    height: width,
  },
})

export default RateItem;