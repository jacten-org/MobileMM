import React from 'react';
import { Text, Button, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Avatar from '../../globals/avatar/Avatar';

const ResultsItem = ({ user1, user2, starred, handleStar, firstAccept, secondAccept, firstRejection }) => { 

  const starColor = starred ? '#f1c40f' : 'white';

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
            <Avatar medium source={{uri: user1.photos[1].url}}/>
            <View style={styles.nameBox}>
              <Text style={styles.names}>{user1.firstname}: </Text>
              <Text style={styles.na}>pending</Text>
            </View>
        </View> 
        <View style={styles.row}>
          <Avatar medium source={{uri: user2.photos[3].url}}/>
          <View style={styles.nameBox}>
            <Text style={styles.names}>{user2.firstname}: </Text>
            <Text style={styles.na}>pending</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start', padding: 6}}>
        <Text>You voted:{'\n'}Good Match</Text>
        <Text>Result:{'\n'}Good Match</Text>
        <Text style={{fontWeight:'bold', fontSize: 19, alignItems: 'center'}}>+300</Text>
      </View>
      <TouchableOpacity 
        style={styles.star}
        onPress={() => handleStar()}
        >
        <Image
          style={{width: 50, height: 50, backgroundColor: starColor,}}
          source={require('../../../icons/star.png')}
          />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 148,
    marginTop: 12,
    padding: 6,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  names: {
    paddingLeft: 10,
    fontWeight: '200',
    fontSize: 20,
  },
  nameColumn: { 
    justifyContent: 'center', 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  reject: {
    paddingLeft: 10,
    fontWeight: '300',
    fontSize: 15,
    color: 'red'
  },
  accept: {
    paddingLeft: 10,
    fontWeight: '300',
    fontSize: 15,
    color: 'green',
  },
  na: {
    paddingLeft: 10,
    fontWeight: '300',
    fontSize: 15,
    color: 'grey',
  },
  innerContainer: {
    flexDirection: 'column',
    flex: 4,
  },
  row: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    flexDirection: 'row',
    padding: 10,
  },
  nameBox: {
    flexDirection: 'column', 
    justifyContent: 'center'
  },
  star: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 9, 
    margin: 9,
  }
})

export default ResultsItem;