import React, { Component } from 'react';
import { Text, Button, View, Image } from 'react-native';

import X from './../globals/buttons/x';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  propCop = this.props.navigation;

  static navigationOptions = ({navigation}) => {
    return {
    headerRight: <X close={() => navigation.navigate('Main')}/>,
    drawerIcon: () => (
      <Image
        style={{width: 30, height: 30, tintColor: 'white'}}
        source={require('./../../icons/png-64px/profile-female_64px.png')}
        > 
      </Image>
    ),
    }

  };

  render() {
    return (
      <View>
      </View>
    )
  }
}

export default Account;