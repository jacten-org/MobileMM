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
import SubmitButton from '../../globals/buttons/Submit';
import turnBirthdayIntoAge from '../../../utils/turnBirthdayIntoAge';
import colors from '../../../utils/colors';

class RateItem extends Component {
  constructor() {
    super();

    this.state = {
      rating: ''
    }
  }

  componentDidMount = () => {
    this.setState({
      rating: `${this.props.ratee && this.props.ratee.firstname} is a...`
    })
  }

  render () {
    let { 
      ratee, 
      handleSlider, 
      handleSubmitRating,
      target,
      card,
      rating,
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
          <View style={styles.body}>
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
            {/* <Text style={styles.text}>
            {`"${ratee.bio}"`}
            </Text> */}
            <Text style={styles.rating}>
              {target === card  && !!rating ? rating : `${this.props.ratee && this.props.ratee.firstname} is a...`}
            </Text>
            <Slider
              style={styles.slider}
              step={1}
              value={5}
              maximumValue={10}
              minimumValue={0}
              onValueChange={(rating) => handleSlider(rating)}
              minimumTrackTintColor={colors.s1}
              />
              <View style={styles.button}>
                <SubmitButton
                  onPress={handleSubmitRating}
                  title='Submit'
                  />
              </View>
            </View>
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
    justifyContent: 'center',
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tags: {
    flexDirection: 'row',
  },
  slider: {
    width: width - 50,
  },
  rating: {
    fontSize: 26,
    color: colors.text,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: width, 
    height: width - 80,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

export default RateItem;