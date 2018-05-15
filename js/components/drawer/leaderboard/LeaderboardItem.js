import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Avatar from './../../globals/avatar/Avatar';
import colors from '../../../utils/colors';

const stdStyle = (flex, fontsize, textalign, fontweight) => {
  return {
    flex: flex,
    flexDirection: 'column',
    color: colors.body,
    fontSize: fontsize,
    fontWeight: fontweight,
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: textalign,
  }
}


const styles = StyleSheet.create({
  number: stdStyle(1, 33, 'center', '300'),
  username: stdStyle(3, 22, 'left', '300'),
  points: stdStyle(1, 27, 'center', '300'),
  avatar: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  dots: {
    color: colors.body, 
    fontSize: 60, 
    fontWeight: '100', 
    height: 70, 
    flex: 1, 
    flexDirection: 'column', 
    textAlign: 'center', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

const LeaderboardItem = ({ powerranking, primaryPhoto, username, index, dots, num }) => {
  return (
    <View style={{
        backgroundColor: colors.s4,
        flexDirection: 'row',
        height: 90,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.body,
        borderBottomWidth: 1,
      }}>
      <Text style={styles.number}>{num || index + 1}</Text>
      <View style={styles.avatar}>
      <Avatar medium round source={primaryPhoto}/>
      </View>
      <Text style={styles.username}>@{username}</Text>
      <Text style={styles.points}>{powerranking}</Text>
    </View>
  )
};

export default LeaderboardItem;