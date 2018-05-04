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

import X from '../../globals/buttons/x';
import PhotosItem from './PhotosItem';
import ImagePicker from 'react-native-image-picker';


class Photos extends Component {
  constructor() {
    super();

    this.state = {
      avatar: null,
      img1: null,
      img2: null,
      img3: null,
      img4: null,
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: <X close={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 30, height: 30, tintColor: 'white'}}
          source={require('../../../icons/png-64px/pictures_64px.png')}
          > 
        </Image>
      ),
    }
  };

  selectPhotoTapped = (imgState) => {
    const options = {
      quality: 1.0,
      maxWidth: 1000,
      maxHeight: 1000,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.launchImageLibrary(options, (response) => {
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
        let newStateObj = {};

        newStateObj[imgState] = source;

        this.setState(
          newStateObj
        );
      }
    });
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <PhotosItem 
          avatar 
          selectPhotoTapped={() => this.selectPhotoTapped('avatar')} 
          image={this.state.avatar}
          />
        <View style={styles.smallPhotosContainer}>
          <PhotosItem 
            smallImg 
            selectPhotoTapped={() => this.selectPhotoTapped('img1')} 
            image={this.state.img1}
            />
          <PhotosItem 
            smallImg 
            selectPhotoTapped={() => this.selectPhotoTapped('img2')} 
            image={this.state.img2}
            />
        </View>
        <View style={styles.smallPhotosContainer}>
          <PhotosItem 
            smallImg 
            selectPhotoTapped={() => this.selectPhotoTapped('img3')} 
            image={this.state.img3}
            />
          <PhotosItem 
            smallImg 
            selectPhotoTapped={() => this.selectPhotoTapped('img4')} 
            image={this.state.img4}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0d6e4',
  },
  smallPhotosContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

export default Photos;