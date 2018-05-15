import React, { Component } from 'react';
import { 
  Text, 
  Button, 
  View, 
  TouchableOpacity 
} from 'react-native';

import OpenDrawer from './../../globals/buttons/OpenDrawer';
import colors from '../../../utils/colors';

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
        backgroundColor: colors.body,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
           fontSize: 80,
           fontWeight: '200',
           color: colors.text,
          }}>
          Match
        </Text> 
      </View>
    )
  }
}

export default Match;