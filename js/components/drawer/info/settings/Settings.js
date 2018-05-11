import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  TextInput,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from './../../../globals/buttons/Button';
import X from './../../../globals/buttons/X';

class Settings extends Component {
  constructor() {
    super();
  }

  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <X back onTap={() => navigation.navigate('Info')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: 'white'}}
          source={require('./../../../../icons/png-64px/gears_64px.png')}
          />
      ),
    }
  };

  mapPasswordLength = (passwordLength) => {
    let stars = '';
    for (let i = passwordLength; i > 0; i--) {
      stars += '*';
    }
    return stars;
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              Account Settings:
            </Text>
            <Button 
              right
              title='username'
              middle={this.props.username}
              onPress={()=>{navigate('Username')}}
              />
            <Button 
              right
              title='email'
              middle={this.props.email}
              onPress={()=>{navigate('Email')}}
              />
            <Button 
              right
              title='password'
              middle={this.mapPasswordLength(this.props.passwordLength)}
              onPress={()=>{navigate('Password')}}
              />
          </View>
          <View style={styles.box}>
            <Text style={styles.headerText}>
              Name Settings:
            </Text>
            <Button
              right
              title='firstname'
              middle={this.props.firstname}
              onPress={()=>{navigate('Firstname')}}
              />
            <Button 
              right
              title='lastname'
              middle={this.props.lastname}
              onPress={()=>{navigate('Lastname')}}
              />
          </View>
          <View style={styles.box}>
            <Button
              title='logout'
              onPress={()=>{this.logout()}}
              />
          </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  box: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 200
  },
  headerText: {
    textAlign: 'left',
    fontSize: 18,
    marginLeft: 30, 
    marginBottom: 7,
  },
  container: {
    flex: 1, 
    justifyContent: 'flex-start',
    marginTop: 20,
    // alignItems: 'center',
    flexDirection: 'column'
  }
})

const mapStateToProps = ({ accountData, passwordLength }) => {
  return {
    username: accountData.username,
    email: accountData.email,
    firstname: accountData.firstname,
    lastname: accountData.lastname,
    passwordLength: passwordLength,

  };
}

export default connect(mapStateToProps)(Settings);