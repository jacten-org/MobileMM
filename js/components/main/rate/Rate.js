import React, { Component } from 'react';

import { 
  Button, 
  Text, 
  View,
} from 'react-native';

class Rate extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:(
        <Button 
          onPress={() => navigation.navigate('DrawerOpen')} 
          title='Drawer'
          color='#fff'
          />
      ),
    };
  };

  render() {
    return (
    <View style={{
        backgroundColor: '#fb9692',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{padding: 80, fontSize: 50, color: '#fff'}}>Rate</Text>
      </View>
    )
  }
}

export default Rate;