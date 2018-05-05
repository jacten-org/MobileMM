import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import actions from '../../../redux/actions/tags_actions';

class X extends Component {
  constructor() {
    super();
  }

  handleTap = () => {
    if (!this.props.savedStatus && this.props.tags) {
      this.props.saveTags()
    }
    this.props.onTap();
  }

  render() {
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(X);