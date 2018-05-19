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

import actions from '../../../redux/actions/dating_actions';
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

    const {
      matches,
      pending,
      acceptPendingMatch,
      rejectPendingMatch
    } = this.props;
    
    if (pending[0]) {
      return (
        <PendingDate
          firstname={pending[0].user2_id.firstname}
          lastname={pending[0].user2_id.lastname}
          age={pending[0].user2_id.age}
          bio={pending[0].user2_id.bio}
          photos={pending[0].user2_id.photos.map(photo => photo.url)}
          tags={pending[0].tags}
          acceptPendingMatch={() => acceptPendingMatch()}
          rejectPendingMatch={() => rejectPendingMatch()}
          />
      )
    } else {
      return (
        <View style={{
          backgroundColor: colors.body,
          flex: 1,
          }}>
          <Text>
            NO PENDING MATCHES!!!
          </Text>
        </View>
      )
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    acceptPendingMatch: actions.acceptPendingMatch,
    rejectPendingMatch: actions.rejectPendingMatch,
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    matches: state.dating.matches,
    pending: state.dating.pending,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dating);