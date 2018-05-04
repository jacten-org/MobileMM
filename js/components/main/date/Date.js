import React, { Component } from 'react';
import { 
  Image, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  View, 
  Button 
} from 'react-native';

class Date extends Component {
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
        backgroundColor: '#c0d6e4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}> <Text style={{padding: 80, fontSize: 50, color: '#fff'}}>Date</Text> </View>
    )
  }
}

export default Date;