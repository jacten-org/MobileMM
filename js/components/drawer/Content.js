import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, Image, StyleSheet } from 'react-native';
import { DrawerItems, DrawerNavigation } from 'react-navigation';

import Logout from './Logout';
import Avatar from '../globals/avatar/Avatar';


const styles = StyleSheet.create({
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  drawer: {
    flex: 1,
    padding: 20,
  },
  header: { 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flex: 4, flexDirection: 'column'
  },
  name: { 
    flex: 1, 
    color: 'white', 
    fontSize: 23, 
    alignItems: 'center',
    margin: 2,
    padding: 2,
  },
  username: { 
    flex: 1, 
    color: 'white', 
    fontSize: 20, 
    alignItems: 'center',
    margin: 2,
    paddingBottom: 10,
    fontWeight: 'bold'
  }
});

const DrawerContent = (props) => (
<View style={styles.drawer}>
  <View style={styles.header}>
    <Avatar xlarge round source={{uri: props.userAvatar}}/>
    <Text style={styles.name}>
      {props.realName} 
    </Text> 
    <Text style={styles.username}>
      {props.userName} 
    </Text> 
  </View>
  <View style={styles.separator}/>
  <DrawerItems {...props}/>
  <Logout {...props}/>
</View>
);

const mapStateToProps = state => {
  return {
    userAvatar: state.userPhotos[0] && state.userPhotos[0].url,
    realName: `${state.accountData.firstname} ${state.accountData.lastname}`,
    userName: `@${state.accountData.username}`,
  };
};



export default connect(mapStateToProps)(DrawerContent);
