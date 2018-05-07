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
    console.log(this.props.tags)
    return(
      <TouchableOpacity onPress={()=> {this.handleTap()}}>
        {
          this.props.savedStatus ?
          <Image
            style={styles.x}
            source={require('./../../../icons/png-64px/whiteClose.png')}
            > 
          </Image> :
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
    fontSize: 18,
    fontWeight: '500',

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