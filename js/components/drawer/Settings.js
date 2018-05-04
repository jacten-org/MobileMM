import React, { Component } from 'react';
import { Text, Button, View, Image } from 'react-native';

import X from './../globals/buttons/x';

class Settings extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: <X close={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: 'white'}}
          source={require('./../../icons/png-64px/gears_64px.png')}
          > 
        </Image>
      ),
    }
  };

  render() {
    return (
      <View>
        <Text style={{padding: 80, fontSize: 50,}}>Settings</Text> 
      </View>
    )
  }
}

export default Settings;