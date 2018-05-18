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

    const {
      matches,
      pending,
    } = this.props;


    console.log(pending) 
    
    if (pending) {
      return (
        <PendingDate
          firstname={pending[0].user2_id.firstname}
          lastname={pending[0].user2_id.lastname}
          age={pending[0].user2_id.age}
          bio={pending[0].user2_id.bio}
          photos={pending[0].user2_id.photos.map(photo => photo.url)}
          tags={pending[0].tags}
          />
      )
    } else {
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
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({

//   }, dispatch);
// };

const mapStateToProps = state => {
  return {
    matches: state.dating.matches,
    pending: state.dating.pending,
  };
};

export default connect(mapStateToProps)(Dating);