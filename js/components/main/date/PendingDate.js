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

import Profile from '../../globals/profile/Profile';
import DotIndicator from '../../globals/dotIndicator/DotIndicator';
import ImageScrollView from '../../globals/imageScrollView/ImageScrollview';
import VoteButton from '../../globals/buttons/Vote';
import turnBirthdayIntoAge from '../../../utils/turnBirthdayIntoAge';
import colors from '../../../utils/colors';

class PendingDate extends Component {
  constructor() {
    super();
  }

  render () {
    let { 
      firstname,
      lastname,
      age,
      bio,
      photos,
      tags,
      handleVote,
    } = this.props;

    console.log('test', this.props)

    if (firstname) {
      let computedAge = turnBirthdayIntoAge(age);

      return (
        <View style={styles.container}>
          <Text style={styles.header}>
            {`You matched with ${firstname}`}
          </Text>
          <Profile
            firstnameProp={firstname}
            lastnameProp={lastname}
            ageProp={age}
            bioProp={bio}
            photosProp={photos}
            tagsProp={tags}
            />
          <View style={styles.button}>
            <Text style={styles.prompt}>
            {`Will you accept this match?`}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: width}}>
            <VoteButton
              onPress={() => handleVote('approved')}
              title='Yes!'
              />
            <VoteButton
              negative
              onPress={() => handleVote('rejected')}
              title='No Thanks'
              />
            </View>
          </View>
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
    fontWeight: '300',
  },
  prompt: {
    color: colors.text,
    fontWeight: '300',
    fontSize: 22,
  },
  bio: {
    color: colors.text,
    fontWeight: '300',
    fontSize: 11,
  },
  tag: {
    color: colors.body,
    backgroundColor: colors.s5,
    fontWeight: '400',
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    width: width / 5,
    textAlign: 'center',
    margin: 1,
  },
  name: {
    color: colors.text,
    fontWeight: '300',
    fontSize: 24,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tags: {
    width: width / 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  slider: {
    width: width - 50,
  },
  header: {
    fontSize: 36,
    color: colors.text,
    fontWeight: '200',
    textAlign: 'center',
    margin: 10,
  },
  imageHolder: {
    flexDirection: 'row',
    width: width, 
    height: width / 1.5,
    backgroundColor: colors.s5,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  info: {
    flexDirection: 'row',
  },
  user: {
    width: width / 2, 
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
  }
})

export default PendingDate;