import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, TouchableOpacity, Text, StyleSheet, View, Alert } from 'react-native';

import actions from '../../../redux/actions/tags_actions';

class X extends Component {
  constructor() {
    super();
  }

  handleTap = () => {
    if (!this.props.savedStatus && this.props.tags) {
      this.props.saveTags()
    }
    if (this.props.tags && this.props.length < 6) {
      Alert.alert(
        'Not Enough Tags!',
        'Please select 3 Tags for you and for your match',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      )
    } else {
      this.props.onTap();
    }
  }

  render() {
    return(
      <TouchableOpacity onPress={()=> {this.handleTap()}}>
        {
          this.props.back ? 
          <View style={styles.backBox}>
            <Image
              resizeMode={Image.resizeMode.stretch}
              style={styles.back}
              source={require('./../../../icons/arrowLeft.png')}
              /> 
          </View>
          :
          (this.props.savedStatus || this.props.length < 6) ?
          <Image
            style={styles.x}
            source={require('./../../../icons/png-64px/whiteClose.png')}
            /> 
          :
          <Text style={styles.done}>
            Done
          </Text>
          }
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  x: {
    margin: 5, 
    width: 30, 
    height: 30, 
    tintColor: 'white'
  },
  done: {
    color: 'white',
    margin: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  back: {
    width: 11, 
    height: 20, 
    tintColor: 'white'
  },
  backBox: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 10,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveTags: actions.saveTags,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    savedStatus: state.savedStatus,
    length: state.tags.user.length + state.tags.pref.length,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(X);