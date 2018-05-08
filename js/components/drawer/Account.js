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

import X from './../globals/buttons/X';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: '',
      zip: '',
      dob: '',
      gender: '',
      genderpref: '',
      bioCharRemaining: 100,
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
    headerRight: <X onTap={() => navigation.navigate('Main')}/>,
    drawerIcon: () => (
      <Image
        style={{width: 30, height: 30, tintColor: 'white'}}
        source={require('./../../icons/png-64px/profile-female_64px.png')}
        /> 
    ),
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback
        style={{flex: 1}} 
        onPress={Keyboard.dismiss}
        >
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              Bio {this.state.bioCharRemaining}
            </Text>
            <TextInput
              style={[styles.textInput, { height: 80 }]}
              autoCapitalize='none'
              multiline={true}
              maxLength={100}
              onChangeText={(bio) => this.setState({
                  bio: bio, 
                  bioCharRemaining: 100 - bio.length,
                  })
                }
              value={this.state.bio}
              />
          </View>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              ZIP Code
            </Text>
            <TextInput
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
              Gender
            </Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize='none'
              onChangeText={(bio) => this.setState({bio})}
              />
          </View>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              Gender Preferences
            </Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize='none'
              onChangeText={(bio) => this.setState({bio})}
              />
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
    fontSize: 20,
    margin: 3, 
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
  zip: {
    textAlign: 'center',
    letterSpacing: 30, 
    fontSize: 20,
    paddingLeft: 20,

  }
})

export default Account;