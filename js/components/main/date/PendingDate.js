import React, { Component } from 'react';
import { 
  Text, 
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Slider,
  Modal,
} from 'react-native';

import ModalBox from '../../globals/modalBox/ModalBox';
import Profile from '../../globals/profile/Profile';
import DotIndicator from '../../globals/dotIndicator/DotIndicator';
import ImageScrollView from '../../globals/imageScrollView/ImageScrollview';
import VoteButton from '../../globals/buttons/Vote';
import turnBirthdayIntoAge from '../../../utils/turnBirthdayIntoAge';
import colors from '../../../utils/colors';

class PendingDate extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
    }
  }

  handleVote = () => {
    this.setState({
      modalVisible: true,
    })
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          > 
          <View style={styles.modal}>
            <ModalBox
              title={'Are you sure?'}
              body={'You will never see this person again!'}
              button1Text={'Yes, Reject!'}
              button1Color={'main'}
              onButton1Press={()=> {this.setState({modalVisible: false})}}
              button2Text={'No. Go Back!'}
              button2Color={'main'}
              onButton2Press={()=> {this.setState({modalVisible: false})}}
              />
          </View>
        </Modal>
          <Text style={styles.header}>
            {`You matched with ${firstname}`}
          </Text>
          <View style={styles.profile}>
            <Profile
              firstnameProp={firstname}
              lastnameProp={lastname}
              ageProp={age}
              bioProp={bio}
              photosProp={photos}
              tagsProp={tags}
              />
          </View>
          <View style={styles.button}>
            <Text style={styles.prompt}>
            {`Will you accept this match?`}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: width}}>
            <VoteButton
              onPress={() => this.handleVote('approved')}
              title='Yes!'
              />
            <VoteButton
              negative
              onPress={() => this.handleVote('rejected')}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    },
  profile: {
    flex: 1,
  },
  prompt: {
    color: colors.text,
    fontWeight: '300',
    fontSize: 22,
    },
  button: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    },
  header: {
    fontSize: 36,
    color: colors.text,
    fontWeight: '200',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    },
  modal: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingBottom: 10,
  },
  })

export default PendingDate;