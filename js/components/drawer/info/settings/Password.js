import React, { Component } from 'react';

import { 
  Text, 
  View, 
  Keyboard,
  StyleSheet,
  TextInput,
} from 'react-native';

import X from '../../../globals/buttons/X';

class Password extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <X onTap={() => navigation.goBack()}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: 'white'}}
          source={require('./../../../../icons/png-64px/gears_64px.png')}
          />
      ),
    }
  };

  render () {
    return (
      <Text>
        Password
      </Text>
    )
  }
};

export default Password;