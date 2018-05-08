import React, { Component } from 'react';
import { 
  Text, 
  Button, 
  View, 
  Image,
  TextInput,
  StyleSheet, 
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import X from './../../globals/buttons/X';
import GenderBox from './GenderBox';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: '',
      zip: '',
      dob: '',
      gender: '',
      genderpref: '',
      bioCharRemaining: 140,
      height: 100,
      tempHeight: 0,
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
    headerRight: <X onTap={() => navigation.navigate('Main')}/>,
    drawerIcon: () => (
      <Image
        style={{width: 30, height: 30, tintColor: 'white'}}
        source={require('./../../../icons/png-64px/profile-female_64px.png')}
        /> 
    ),
    }
  };

  updateSize = (height) => {
    let adjustedHeight = height > 100 ? height : 100;
    this.setState({
      height: adjustedHeight 
    });
  }

  tapOutsideInput = (height) => {
    Keyboard.dismiss();
    this.setState({
      tempHeight: height,
      height: 100,
    })
  }

  render() {

    console.log(this.state.height, this.state.tempHeight)

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
                style={[newHeight]}
                editable={true}
                value={this.state.bio}
                onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
                autoCapitalize='none'
                multiline={true}
                maxLength={140}
                onChangeText={(bio) => this.setState({
                    bio: bio, 
                    bioCharRemaining: 140 - bio.length,
                    })
                  }
                value={this.state.bio}
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
          <GenderBox/>
          </View>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              Gender(s) of your Mate(s)
            </Text>
            <GenderBox/>
          </View>
          <View style={{height:100}}/>
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
  },
  textInput: {
    width: 300, 
    backgroundColor: 'lightgrey',
    height: 30,
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
    textAlign: 'center',
    letterSpacing: 30, 
    fontSize: 20,
    paddingLeft: 20,
  },
})

export default Info;