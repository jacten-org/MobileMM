import React, { Component } from 'react';
import { 
  Text, 
  Button, 
  View, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  PixelRatio 
} from 'react-native';

import X from './../globals/buttons/x';
import ImagePicker from 'react-native-image-picker';


class Photos extends Component {
  constructor() {
    super();

    this.state = {
      avatarSource: null,
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: <X close={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 30, height: 30, tintColor: 'white'}}
          source={require('./../../icons/png-64px/pictures_64px.png')}
          > 
        </Image>
      ),
    }
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
        <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
        { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
          <Image style={styles.avatar} source={this.state.avatarSource} />
        }
        </View>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

export default Photos;