import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  Text, 
  Button, 
  View, 
  Image, 
  TouchableOpacity, 
  TouchableHighlight,
  StyleSheet, 
  Modal,
} from 'react-native';

import ModalButton from '../../globals/buttons/ModalButton';
import X from '../../globals/buttons/x';
import PhotosItem from './PhotosItem';
import ImagePicker from 'react-native-image-picker';
import actions from '../../../redux/actions/account_page_actions';


class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: null,
      img1: null,
      img2: null,
      img3: null,
      img4: null,
      modalVisible: false,
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

  

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
      else {

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        let newStateObj = {};

        newStateObj[imgState] = response.uri;

        this.setState(
          newStateObj
        );
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <ModalButton
              title={'Set Avatar'}
              onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
              />
            <ModalButton
              title={'Delete Photo'}
              onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
              />
            <ModalButton
              title={'Cancel'}
              onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
              />
          </View>
        </Modal>
        <PhotosItem 
          avatar 
          selectPhotoTapped={() => this.selectPhotoTapped('avatar')} 
          image={this.props.userPhotos[0] && this.props.userPhotos[0].url || this.state.avatar}
          />
        <View style={styles.smallPhotosContainer}>
          <PhotosItem 
            smallImg 
            selectPhotoTapped={() => this.selectPhotoTapped('img1')} 
            image={this.props.userPhotos[1] && this.props.userPhotos[1].url || this.state.img1}
            />
          <PhotosItem 
            smallImg 
            selectPhotoTapped={() => this.selectPhotoTapped('img2')} 
            image={this.props.userPhotos[2] && this.props.userPhotos[2].url || this.state.img2}
            />
        </View>
        <View style={styles.smallPhotosContainer}>
          <PhotosItem 
            smallImg 
            selectPhotoTapped={() => this.selectPhotoTapped('img3')} 
            image={this.props.userPhotos[3] && this.props.userPhotos[3].url || this.state.img3}
            />
          <PhotosItem 
            smallImg 
            selectPhotoTapped={() => this.selectPhotoTapped('img4')} 
            image={this.props.userPhotos[4] && this.props.userPhotos[4].url || this.state.img4}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#c0d6e4',
    paddingTop: 10,
  },
  smallPhotosContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  modal: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    
  }
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    uploadPhoto: actions.uploadPhoto,
    deletePhoto: actions.deletePhoto,
    updatePrimaryPhoto: actions.updatePrimaryPhoto,
    updateSignupStatus: actions.updateSignupStatus,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    userPhotos: state.userPhotos,
    userId: state.accountData.id,
    username: state.accountData.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);