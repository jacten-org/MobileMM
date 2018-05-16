import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  Button, 
  Text, 
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Slider,
  Alert,
} from 'react-native';

import colors from '../../../utils/colors';
import MatchItem from './MatchItem';
import actions from '../../../redux/actions/matchmaker_page_actions';
import OpenDrawer from './../../globals/buttons/OpenDrawer';

class Match extends Component {
  constructor() {
    super();
    this.state = {
      card1: '',
      card2: '',
      card3: '',
      target: 1,
    }
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

  handleVote = (vote) => {
    let card = 'card' + this.state.target;

    let { id, user1_id, user2_id } = this.state[card];
    const voteObject = {
      matchId: id,
      starred: 0,
      decision: vote,
      user1_id: user1_id,
      user2_id: user2_id
    };
    this.props.postMatchmakerDecision(voteObject);

    if (this.state.target === 1) {
      this.refs.scrollView.scrollTo({x: width, y: 0, animated: true})
    } else if (this.state.target === 2) {
      this.refs.scrollView.scrollTo({x: width * 2, y: 0, animated: true})
    }
  }

  onScrollEnd = () => {
      this.setState({
        rating: '',
      })

    if (this.state.target === 1) {
      this.setState({
        target: 2,
        card1: this.state.card3,
      })
    } else if (this.state.target === 2) {
      this.setState({
        target: 3,
        card2: this.props.card2 || undefined,
      },
      this.refs.scrollView.scrollTo({x: 0, y: 0, animated: false}))
      this.setState({
        card3: this.props.card3 || undefined,
        target: 1,
      })
    }
  }

  componentDidMount = () => {
    this.props.card1 &&
      this.setState({
        card1: this.props.card1,
        card2: this.props.card2,
        card3: this.props.card3,
    });
  };

  render() {
    // console.log(
    //   'card1:', this.state.card1,
    //   'card2:', this.state.card2,
    //   'card3:', this.state.card3,
    //   'target', this.state.target,
    // )
    // console.log(
    //   'propC1', this.props.card1,
    //   'propC2', this.props.card2,
    //   'propC3', this.props.card3,
    // )
      return (
        <ScrollView
          style={styles.container}
          pagingEnabled={true}
          scrollEnabled={false}
          horizontal={true}
          ref="scrollView"
          onMomentumScrollEnd={this.onScrollEnd}
          >
          <MatchItem
            match={this.state.card1}
            handleVote={this.handleVote}
            target={this.state.target}
            card={1}
            />
          <MatchItem
            match={this.state.card2}
            handleVote={this.handleVote}
            target={this.state.target}
            card={2}
            />
          <MatchItem
            match={this.state.card3}
            handleVote={this.handleVote}
            target={this.state.target}
            card={3}
            />
        </ScrollView>
      )
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.s3,
    flex: 1
  },
  text: {
    fontWeight: '100',
    fontSize: 104,
    color: colors.body,
  },
  placeholderContainer: {
    backgroundColor: colors.s2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    postMatchmakerDecision: actions.postMatchmakerDecision,
  }, dispatch);
};

const mapStateToProps = ({ matches }) => {
  return {
    card1: matches[matches.length - 1],
    card2: matches[matches.length - 2],
    card3: matches[matches.length - 3],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);