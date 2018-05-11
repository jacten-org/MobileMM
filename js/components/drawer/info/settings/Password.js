import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Keyboard,
  StyleSheet,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { REST_SERVER_URL } from 'react-native-dotenv';

import actions from '../../../../redux/actions/info_actions';
import StdButton from '../../../globals/buttons/StdButton';
import X from '../../../globals/buttons/X';

class Password extends Component {
  constructor() {
    super();
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      error: '',
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <X onTap={() => navigation.goBack()}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: 'white'}}
          source={require('./../../../../icons/png-64px/gears_64px.png')}
          />
      ),
    }
  };

  handleSaveTap = () => {
    const password = this.state.currentPassword;
    const newPassword = this.state.newPassword;
    const { username, id } = this.props;
    const body = {
      username,
      password,
      newPassword,
      id,
    };
    this.props.updatePassword(body);
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Current
        </Text>
        <TextInput
          style={styles.new}
          secureTextEntry={true}
          autoFocus={true}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Current Password'
          onChangeText={(currentPassword) => {this.setState({currentPassword})}}
          />
        <Text style={styles.heading}>
          New
        </Text>
        <TextInput
          style={styles.new}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='New Password'
          onChangeText={(newPassword) => {this.setState({newPassword})}}
          />
        <Text style={styles.heading}>
          Confirm
        </Text>
        <TextInput
          style={styles.new}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Confirm New Password'
          onChangeText={(confirmPassword) => {this.setState({confirmPassword})}}
          />
        <View style={styles.separator}/>
        <View style={styles.save}>
          <StdButton 
            onPress={this.handleSaveTap}
            title='Save'
            disabled={this.state.newPassword.length < 4 || this.state.newPassword !== this.state.confirmPassword}
            />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  save: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  heading: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  old: {
    marginBottom: 15,
    fontSize: 15,
  },
  new: {
    marginBottom: 20,
    fontSize: 18,
    color: 'green',
  },
  separator: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updatePassword: actions.updatePassword,
  }, dispatch);
}

const mapStateToProps = ({ accountData }) => {
  return {
    username: accountData.username,
    id: accountData.id,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);