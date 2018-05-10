import React, { Component } from 'react';
import axios from 'axios';
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';


import { REST_SERVER_URL } from 'react-native-dotenv';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }
  
  static navigationOptions = {
    title: 'Login Page',
  };

  handleLogin = async (e) => {
    const { username, password } = this.state;
    const body = {
      username,
      password
    };
    try {
      const data = await axios.post(`${REST_SERVER_URL}/api/auth/login`, body);
      await AsyncStorage.setItem('token', data.data.token);
      if (!!data) {
        this.props.navigation.navigate('AuthLoading');
      } else {
        this.setState({ username: '' });
        this.setState({ password: '' });
      }
    } catch (err) {
      console.error(err);
    }
  };  

  render() {
    return (
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}
          enabled
          >
          <TextInput
          
            style={styles.textInput}
            placeholder="Username"
            autoCapitalize='none'
            onChangeText={(username) => this.setState({username})}
            />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            />
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={{color: 'white', fontSize: 18}}>
              Login
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40, 
    width: 300, 
    backgroundColor: '#afd7b4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5, 
  },
  textInput: {
    height: 40, 
    width: 300, 
    backgroundColor: 'lightgrey',
    margin: 5, 
    padding: 5, 
    borderRadius: 5,
  }
})

export default Login;