import React, { Component } from 'react';

import { 
  Text, 
  Button, 
  View, 
  AsyncStorage,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

class Logout extends Component {
  constructor() {
    super();
  }

  _signOutAsync = async () => {
    console.log('hi')
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };


  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this._signOutAsync()}
        >
        <View style={styles.container}>
          <Text style={styles.text}>
            Logout
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
  },
  image: {
    width: 35, 
    height: 40, 
    tintColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '300',
  }
});

export default Logout;