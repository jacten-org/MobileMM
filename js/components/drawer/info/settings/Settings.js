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
      headerLeft: <X onTap={() => navigation.navigate('Info')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: 'white'}}
          source={require('./../../../../icons/png-64px/gears_64px.png')}
          />
      ),
    }
  };

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
              onPress={()=>{navigate('Username')}}
              />
            <Button
              right
              title='email'
              onPress={()=>{navigate('Email')}}
              />
            <Button
              right
              title='password'
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
              onPress={()=>{navigate('Firstname')}}
              />
            <Button
              right
              title='lastname'
              onPress={()=>{navigate('Lastname')}}
              />
          </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  box: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 200
  },
  headerText: {
    textAlign: 'left',
    fontSize: 20,
    margin: 3, 
  },
  container: {
    flex: 1, 
    justifyContent: 'flex-start',
    marginTop: 20,
    // alignItems: 'center',
    flexDirection: 'column'
  }
})

export default Settings;