import React, { Component } from 'react';
import { Text, Button, View, Image } from 'react-native';

import X from './../globals/buttons/x';

class Tags extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: <X close={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: 'white'}}
          source={require('./../../icons/png-64px/pricetags_64px.png')}
          > 
        </Image>
      ),
    }
  };

  render() {
    return (
      <View>
        <Text style={{padding: 80, fontSize: 50,}}>Tags go HERE!</Text> 
      </View>
    )
  }
}

export default Tags;