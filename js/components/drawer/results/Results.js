import React, { Component } from 'react';
import { Text, Button, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../../redux/actions/follows_page_actions';
import X from '../../globals/buttons/x';
import ResultsItem from './ResultsItem';

class Results extends Component {
  constructor() {
    super();
  }

  handleStar = (matchId, starred, index) => {
    starred 
      ? this.props.unstarFollow(matchId, index, this.props.navigation.state.routeName) 
      : this.props.starFollow(matchId, index);
  };

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: <X onTap={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 30, height: 30, tintColor: 'white'}}
          source={require('../../../icons/png-64px/scope_64px.png')}
          > 
        </Image>
      ),
    }
  };

  _keyExtractor = (item, index) => 'a' + item.id;

  _renderItem = ({item, index}) => (
    <ResultsItem
      index={index}
      decision={item.decision}
      starred={item.starred}
      handleStar={() => this.handleStar(item.id, item.starred, index)}
      key={item.id}
      user1={item.user1_id}
      user2={item.user2_id}
      itemId={item.id}
      activevoting={item.activevoting}
      firstAccept={item.firstAccept}
      secondAccept={item.secondAccept}
      isSuccessful={item.isSuccessful}
      firstRejection={item.firstRejection}
      active={item.active}
      />
  );

  render() {

    let route = this.props.navigation.state.routeName;

    let routeData = route === 'Starred'
      ? this.props.starred
        : this.props.all
    return (
      <FlatList 
        style={{backgroundColor: route === 'Starred' ? '#c0d6e4' : '#fb9692', flex: 1}}
        data={routeData}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      starFollow: actions.starFollow,
      unstarFollow: actions.unstarFollow,
    },
    dispatch
  );
};

const mapStateToProps = ({ follows }) => {
  return {
    all: follows.allOthers || [],
    starred: follows.starred || [],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);