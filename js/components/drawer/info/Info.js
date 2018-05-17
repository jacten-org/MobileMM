import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  TextInput,
  StyleSheet, 
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import actions from '../../../redux/actions/info_actions';
import colors from '../../../utils/colors';
import Button from './../../globals/buttons/Button';
import X from './../../globals/buttons/X';
import GenderBox from './GenderBox';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: '',
      zip: '',
      bioCharRemaining: 140,
      height: 80,
      tempHeight: 0,
      gender: 0,
      pref: 0,
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
    headerRight: <X onTap={() => navigation.navigate('Main')}/>,
    headerLeft: null,
    drawerIcon: () => (
      <Image
        style={{width: 30, height: 30, tintColor: colors.s3}}
        source={require('./../../../icons/png-64px/profile-female_64px.png')}
        /> 
      ),
    }
  };

  handleGenderChange = (state, genderNum) => {
    this.setState({ [state]: genderNum });
  }

  updateSize = (height) => {
    let adjustedHeight = height > 80 ? height : 80;
    this.setState({
      height: adjustedHeight 
    });
  }

  tapOutsideInput = (height) => {
    Keyboard.dismiss();
    this.setState({
      tempHeight: height,
      height: 80,
    })
  }

  componentWillMount = () => {
    this.setState({
      zip: this.props.zip + '',
      bio: this.props.bio,
      gender: this.props.gender,
      pref: this.props.pref,
      bioCharRemaining: 140 - this.props.bio.length,
    })
  }

  componentWillUnmount = () => {
    const { bio, zip, gender, pref } = this.state;
    const location = zip;
    const preference = pref;
    this.props.updateBioData({ bio, location, gender, preference });
  }

  render() {

    const {height, tempHeight} = this.state;

    let newHeight = {
      height
    }

    let newContainerHeight = {
      height: height + 28
    }

    return (
      <TouchableWithoutFeedback
        style={{flex: 1}} 
        onPress={() => this.tapOutsideInput(height)}
        >
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              Bio
            </Text>
            <View style={[styles.bioContainer, newContainerHeight]}>
              <TextInput
                onFocus={() => this.updateSize(tempHeight)}
                style={[newHeight, {color: colors.text}]}
                editable={true}
                value={this.state.bio}
                onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
                autoCapitalize='none'
                multiline={true}
                maxLength={140}
                numberOfLines={3}
                onChangeText={(bio) => this.setState({
                    bio: bio, 
                    bioCharRemaining: 140 - bio.length,
                    })
                  }
                />
              <Text style={[styles.counter, this.state.bioCharRemaining === 0 && {color: 'red'}]}>
                {this.state.bioCharRemaining}
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              ZIP Code
            </Text>
            <TextInput
              editable={true}
              clearTextOnFocus={true}
              keyboardType='numeric'
              style={[styles.textInput, styles.zip]}
              maxLength={5}
              autoCapitalize='none'
              onChangeText={(zip) => this.setState({zip})}
              value={this.state.zip}
              />
          </View>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              Your Gender
            </Text>
            <GenderBox
              handleGenderChange={this.handleGenderChange}
              gender={this.state.gender}
              type='gender'
              />
          </View>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              Gender(s) of your Mate(s)
            </Text>
            <GenderBox
              handleGenderChange={this.handleGenderChange}
              gender={this.state.pref}
              type='pref'
              />
          </View>
          <View style={{height: 30}}/>
          <Button
            right
            title='Settings'
            onPress={()=>{this.props.navigation.navigate('Settings')}}
            />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    margin: 3, 
  },
  counter: {
    textAlign: 'right',
    fontSize: 13,
    padding: 3,
  },
  container: {
    flex: 1,
    // padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.body
  },
  textInput: {
    width: 300, 
    backgroundColor: 'lightgrey',
    height: 60,
    margin: 3, 
    padding: 3, 
    borderRadius: 5,
  },
  bioContainer: {
    height: 100,
    width: 300, 
    backgroundColor: 'lightgrey',
    margin: 3, 
    padding: 3, 
    borderRadius: 5,
  },
  zip: {
    color: colors.text,
    textAlign: 'center',
    letterSpacing: 30, 
    fontSize: 26,
    paddingLeft: 20,
  },
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateBioData: actions.updateBioData,
  }, dispatch);
}

const mapStateToProps = ({ bioData }) => {
  return {
    zip: bioData.location || "",
    bio: bioData.bio || "",
    gender: bioData.gender || "",
    pref: bioData.preference || "",
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);