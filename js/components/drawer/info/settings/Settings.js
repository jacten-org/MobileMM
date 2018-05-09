import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  TextInput,
} from 'react-native';

import Button from './../../../globals/buttons/Button';
import X from './../../../globals/buttons/X';

class Settings extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      username: '',
      firstname: '',
      lastname: '',
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: <X onTap={() => navigation.navigate('Main')}/>,
      headerLeft: <X onTap={() => navigation.navigate('Profile')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: 'white'}}
          source={require('./../../../../icons/png-64px/gears_64px.png')}
          />
      ),
    }
  };

  render() {
    return (
      <View
        style={{flex: 1}} 
        >
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              Username
            </Text>
          <Button
            right
            title='edit username'
            onPress={()=>{this.props.navigation.navigate('Username')}}
            />
          </View>
        </View>
      </View>
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
    color: 'black',
    textAlign: 'center',
    letterSpacing: 30, 
    fontSize: 26,
    paddingLeft: 20,
  },
})

export default Settings;