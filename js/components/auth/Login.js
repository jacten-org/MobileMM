import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  StyleSheet,
  Text
} from 'react-native';

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

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
          />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          />
        <TouchableOpacity style={styles.button} onPress={this._signInAsync}>
          <Text style={{color: 'white', fontSize: 18}}>
            Login
          </Text>
        </TouchableOpacity>
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