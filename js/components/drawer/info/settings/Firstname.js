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

import actions from '../../../../redux/actions/info_actions';
import StdButton from '../../../globals/buttons/StdButton';

import X from '../../../globals/buttons/X';

class Firstname extends Component {
  constructor() {
    super();
    
    this.state = {
      newFirstname: '',
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
    this.props.updateAccountData({firstname: this.state.newFirstname});
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Current
        </Text>
        <Text style={styles.old}>
          {this.props.firstname}
        </Text>
        <Text style={styles.heading}>
          New
        </Text>
        <TextInput
          style={styles.new}
          autoCorrect={false}
          autoFocus={true}
          autoCapitalize='none'
          placeholder='Firstname'
          onChangeText={(newFirstname) => {this.setState({newFirstname})}}
          />
        <View style={styles.separator}/>
        <View style={styles.save}>
          <StdButton 
            onPress={this.handleSaveTap}
            title='Save'
            disabled={!this.state.newFirstname.length}
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
    updateAccountData: actions.updateAccountData,
  }, dispatch);
}

const mapStateToProps = ({ accountData }) => {
  return {
    firstname: accountData.firstname
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Firstname);