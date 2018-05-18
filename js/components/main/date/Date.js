import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  Image, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  View, 
  Button 
} from 'react-native';

import PendingDate from './PendingDate';
import OpenDrawer from './../../globals/buttons/OpenDrawer';
import colors from '../../../utils/colors';

class Dating extends Component {
  constructor() {
    super();

  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:(
        <OpenDrawer 
          onTouch={() => navigation.navigate('DrawerOpen')} 
          />
      ),
    };
  };
  render() {
    let {
      matches,
    } = this.props;

    if (matches) {
      
    }


    return (
      <View style={{
        backgroundColor: colors.body,
        flex: 1,
        }}>
        <Text>
          {matches[0] && matches[0].id}
        </Text>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch);
};

const mapStateToProps = state => {
  return {
    matches: [ state.dating ]

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dating);