import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Image, ScrollView } from 'react-native';

import LeaderboardItem from './LeaderboardItem';
import X from './../../globals/buttons/x';

class Leaderboard extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: <X onTap={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 30, height: 30, tintColor: 'white'}}
          source={require('./../../../icons/png-64px/trophy_64px.png')}
          > 
        </Image>
      ),
    }
  };

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fb9692',}}>
        <LeaderboardItem
          key={30}
          username={this.props.accountData.username}
          powerranking={this.props.powerRanking.totalPoints}
          primaryPhoto={this.props.userPhotos[0].url}
          num={this.props.powerRanking.rank}
          />
        <LeaderboardItem dots/>
        {this.props.leaderboard.map((boarditem, index) => {
          return (
            <LeaderboardItem
              key={index}
              username={boarditem.username}
              powerranking={boarditem.powerranking}
              primaryPhoto={boarditem.primaryPhoto}
              index={index}
              />
          );
        })}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ leaderboard, powerRanking, accountData, userPhotos }) => {
  return {
    leaderboard,
    powerRanking,
    accountData,
    userPhotos,
  };
};

export default connect(mapStateToProps)(Leaderboard);