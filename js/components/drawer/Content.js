import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, Image, StyleSheet } from 'react-native';
import { DrawerItems, DrawerNavigation } from 'react-navigation';

import Avatar from '../globals/avatar/Avatar';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  drawer: {
    flex: 1,
    padding: 20,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  header: { 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    flexDirection: 'column',
    marginBottom: 20,
  },
  name: { 
    color: colors.s3, 
    fontSize: 23, 
    alignItems: 'center',
    marginTop: 5,
  },
  username: { 
    color: colors.s3, 
    fontSize: 20, 
    alignItems: 'center',
    fontWeight: 'bold'
  }
});

const DrawerContent = (props) => (
<View style={styles.drawer}>
  <View style={styles.header}>
    <Avatar xxl round source={{uri: props.userAvatar}}/>
    <Text style={styles.name}>
      {props.realName} 
    </Text> 
    <Text style={styles.username}>
      {props.userName}
    </Text> 
  </View>
  <View style={styles.separator}/>
  <DrawerItems {...props}/>
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
