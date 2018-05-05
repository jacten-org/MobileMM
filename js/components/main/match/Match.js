import React, { Component } from 'react';
import { 
  Text, 
  Button, 
  View, 
  TouchableOpacity 
} from 'react-native';

import OpenDrawer from './../../globals/buttons/OpenDrawer';

class Match extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:(
        <OpenDrawer 
          onTouch={() => navigation.navigate('DrawerOpen')} 
          />
      ),
    };
  };

  render() {
    return (
      <View style={{
        backgroundColor: '#fab297',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
            padding: 80, 
            fontSize: 50,
            color: '#fff',
          }}>
          Match
        </Text> 
      </View>
    )
  }
}

export default Match;