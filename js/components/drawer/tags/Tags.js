import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Button, View, Image } from 'react-native';

import actions from '../../../redux/actions/tags_actions';
import X from './../../globals/buttons/X';
import TagsItem from './TagsItem';
import SelectedHolder from './SelectedHolder';

class Tags extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({navigation}) => {
    return {
    headerRight: <X tags onTap={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: 'white'}}
          source={require('./../../../icons/png-64px/pricetags_64px.png')}
          /> 
      ),
    }
  };



  render() {
    console.log(this.props)
    let route = this.props.navigation.state.routeName;
    let routeData = route === 'You'
      ? this.props.tags.user
      : this.props.tags.pref
    return (
      <View>
        <SelectedHolder
          />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateTagsState: actions.updateTagsState,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    savedStatus: state.savedStatus,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);