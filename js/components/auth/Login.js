import React, { Component } from 'react';
import {
  View,
  Button,
  AsyncStorage,
} from 'react-native';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Please login in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    try {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Main');
    } catch (error) {
      console.error
    }
  };
}

export default Login;