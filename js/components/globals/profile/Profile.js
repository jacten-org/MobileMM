import React, { Component } from 'react';
import { 
  Text, 
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Slider,
} from 'react-native';
import { connect } from 'react-redux';

import X from '../buttons/X';
import ImageScrollView from '../../globals/imageScrollView/ImageScrollview';
import DotIndicator from '../dotIndicator/DotIndicator';
import SubmitButton from '../buttons/Submit';
import turnBirthdayIntoAge from '../../../utils/turnBirthdayIntoAge';
import colors from '../../../utils/colors';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      currentPhoto: 0,
    }
  }

  static navigationOptions = (props) => {
    return {
      headerRight: <X onTap={() => props.navigation.navigate('Main')}/>,
      headerLeft: null,
      title: props && 'props.firstname'
    }
  };

  trackPhotoIndex = (photoIndex = 0) => {
    if (photoIndex !== this.state.currentPhoto) {
      this.setState({
        currentPhoto: photoIndex
      })
    }
  }

  render () {

    let { 
      photos,
      age,
      firstname,
      lastname,
      tags,
      bio,
    } = this.props;

    if (age) {
      let realAge = turnBirthdayIntoAge(age);
  
      return (
        <View style={styles.container}>
          <View style={styles.imageHolder}>
            <ImageScrollView
              photos={photos}
              card={0}
              target={0}
              trackPhotoIndex={this.trackPhotoIndex}
              current={this.state.currentPhoto}
              width={width}
              height={width}
              />
          </View>
          <DotIndicator
            total={photos.length}
            current={this.state.currentPhoto}
            />
          <View style={styles.body}>
            <View style={styles.info}>
              <Text style={styles.name}>
                {firstname 
                  + ' ' +
                lastname[0]}
              </Text>
              <Text style={styles.text}>
              {realAge} years old
              </Text>
              <View style={styles.tags}>
                <Text style={styles.tag}>
                  {tags[0]} 
                </Text>
                <Text style={[styles.tag, {marginHorizontal: 5}]}>
                  {tags[1]} 
                </Text>
                <Text style={styles.tag}>
                  {tags[2]} 
                </Text>
              </View>
              <Text style={styles.bio}>
              {`"${bio}"`}
              </Text>
            </View>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.name}>
            ERROR
          </Text>
        </View>
      )
    }
    
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.body,
    flex: 1,
    width: width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.text,
    fontWeight: '300',
  },
  bio: {
    color: colors.text,
    fontWeight: '300',
    fontSize: 14,
  },
  tag: {
    color: colors.body,
    backgroundColor: colors.s5,
    fontWeight: '400',
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    width: 100,
    textAlign: 'center',
  },
  name: {
    color: colors.text,
    fontWeight: '300',
    fontSize: 27,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  slider: {
    width: width - 50,
  },
  rating: {
    fontSize: 34,
    color: colors.text,
    fontWeight: '200',
    textAlign: 'center',
  },
  imageHolder: {
    width: width, 
    height: width - 20,
    backgroundColor: colors.s5
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  }
})

const mapStateToProps = state => {
  return {
    photos: state.userPhotos.map(photo => photo.url),
    age: state.bioData.age,
    firstname: state.accountData.firstname,
    lastname: state.accountData.lastname,
    tags: state.tags.user,
    bio: state.bioData.bio,
  };
};

export default connect(mapStateToProps)(Profile);