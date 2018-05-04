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
      targetPhoto: null,
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

  handlePhotoTap = (number, imgState) => {
    if (this.props.userPhotos[number] && this.props.userPhotos[number].url) {
      this.setModalVisible(true, number)
    } else {
      this.selectPhotoTapped(imgState)
    }
  }

  setModalVisible = (visible, target) => {
    this.setState({
      modalVisible: visible,
      targetPhoto: target
    });
  }

  selectPhotoTapped = (imgState) => {
  
    const options = {
      quality: 1.0,
      maxWidth: 1000,
      maxHeight: 1000,
      mediaType: 'photo',
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
        this.setState(newStateObj);
      }
    });
  }

  handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('id', this.props.userId);
    formData.append('username', this.props.username);
    this.props.uploadPhoto(formData);
    this.setState({filename: "Choose a file"});
  }

  handleDeletePhoto = (target) => {
    const { url, id } = this.props.userPhotos[target];
    const key = url.slice(46);
    this.props.deletePhoto(key, id, target);
    this.setModalVisible(!this.state.modalVisible);
  }

  handleSetAvatar = (target) => {
    const { id } = this.props.userPhotos[target];
    this.props.updatePrimaryPhoto(id, target);
    this.setModalVisible(!this.state.modalVisible);
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          >
          <View style={styles.modal}>
            <ModalButton
              title={'Set Avatar'}
              color={'#c0d6e4'}
              onPress={() => {this.handleSetAvatar(this.state.targetPhoto);}}
              />
            <ModalButton
              title={'Delete Photo'}
              color={'#fb9692'}
              onPress={() => {this.handleDeletePhoto(this.state.targetPhoto);}}
              />
            <ModalButton
              title={'Cancel'}
              onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
              />
          </View>
        </Modal>
        <PhotosItem 
          avatar 
          handlePhotoTap={() => this.handlePhotoTap(0, 'avatar')} 
          image={this.props.userPhotos[0] && this.props.userPhotos[0].url || this.state.avatar}
          />
        <View style={styles.smallPhotosContainer}>
          <PhotosItem 
            smallImg 
            handlePhotoTap={() => this.handlePhotoTap(1, 'img1')} 
            image={this.props.userPhotos[1] && this.props.userPhotos[1].url || this.state.img1}
            />
          <PhotosItem 
            smallImg 
            handlePhotoTap={() => this.handlePhotoTap(2, 'img2')} 
            image={this.props.userPhotos[2] && this.props.userPhotos[2].url || this.state.img2}
            />
        </View>
        <View style={styles.smallPhotosContainer}>
          <PhotosItem 
            smallImg 
            handlePhotoTap={() => this.handlePhotoTap(3, 'img3')} 
            image={this.props.userPhotos[3] && this.props.userPhotos[3].url || this.state.img3}
            />
          <PhotosItem 
            smallImg 
            handlePhotoTap={() => this.handlePhotoTap(4, 'img4')} 
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