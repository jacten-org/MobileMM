import React, { Component } from 'react';
import { 
  Image, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  View, 
  Button 
} from 'react-native';

import OpenDrawer from './../../globals/buttons/OpenDrawer';
import colors from '../../../utils/colors';

class Date extends Component {
  constructor() {
    super();
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
      }}> <Text style={{padding: 80, fontSize: 50, color: '#fff'}}>Date</Text> </View>
    )
  }
}

export default Date;