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

import MatchScrollView from './MatchScrollview';
import VoteButton from '../../globals/buttons/Vote';
import turnBirthdayIntoAge from '../../../utils/turnBirthdayIntoAge';
import colors from '../../../utils/colors';

class MatchItem extends Component {
  constructor() {
    super();
  }

  render () {
    let { 
      match, 
      handleVote,
      target,
      card,
      rating,
    } = this.props;


    if (match && match.user1) {
      let realAge = turnBirthdayIntoAge(match.user1.age);
  
      return (
        <View style={styles.container}>
          <Text style={styles.header}>
            {`${match.user1.firstname} + ${match.user2.firstname}`}
          </Text>
          <View style={styles.imageHolder}>
            <MatchScrollView
              style={styles.image}
              photos={match.user1.photos}
              />
            <MatchScrollView
              style={styles.image}
              photos={match.user2.photos}
              />  
          </View>
          <View style={styles.body}>
            <View style={styles.info}>
              <View style={styles.user}>
                <Text style={styles.name}>
                  {match.user1.firstname 
                    + ' ' +
                  match.user1.lastname[0]}
                </Text>
                <Text style={styles.text}>
                {realAge} years old
                </Text>
                <View style={styles.tags}>
                  <Text style={styles.tag}>
                    {match.user1.tags[0]} 
                  </Text>
                  <Text style={styles.tag}>
                    {match.user1.tags[1]} 
                  </Text>
                  <Text style={styles.tag}>
                    {match.user1.tags[2]} 
                  </Text>
                </View>
                <Text style={styles.bio}>
                {`"${match.user1.bio}"`}
                </Text>
              </View>
              <View style={styles.user}>
                <Text style={styles.name}>
                  {match.user2.firstname 
                    + ' ' +
                  match.user2.lastname[0]}
                </Text>
                <Text style={styles.text}>
                {realAge} years old
                </Text>
                <View style={styles.tags}>
                  <Text style={styles.tag}>
                    {match.user2.tags[0]} 
                  </Text>
                  <Text style={styles.tag}>
                    {match.user2.tags[1]} 
                  </Text>
                  <Text style={styles.tag}>
                    {match.user2.tags[2]} 
                  </Text>
                </View>
                <Text style={styles.bio}>
                {`"${match.user2.bio}"`}
                </Text>
              </View>
            </View>
              <View style={styles.button}>
                <Text style={styles.prompt}>
                {`${match.user1.firstname} and ${match.user2.firstname} are a...`}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: width}}>
                <VoteButton
                  onPress={() => handleVote('approved')}
                  title='Good Match'
                  />
                <VoteButton
                  negative
                  onPress={() => handleVote('rejected')}
                  title='Bad Match'
                  />
                </View>
              </View>
            </View>
          </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.name}>
            No more matches to vote on!
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
    fontSize: 10,
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
    paddingVertical: 10,
  }
})

export default MatchItem;