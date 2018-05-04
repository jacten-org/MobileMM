import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import action from '../../redux/actions/initialize_status_actions';
import initialize from '../../redux/actions/initialize_actions';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    if (!userToken) {
      this.props.navigation.navigate('Auth');
    } else {
      this.props.initialize(this.props.navigation.navigate)
    }

  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      initializeStateAction: action.updateInitializeState,
      initialize: initialize.initialize
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    signupStatus: state.signupStatus,
    initializeState: state.initializeState
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);