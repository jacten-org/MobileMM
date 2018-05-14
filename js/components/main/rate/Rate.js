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
} from 'react-native';

import RateItem from './RateItem';
import actions from '../../../redux/actions/ratings_page_actions';
import OpenDrawer from './../../globals/buttons/OpenDrawer';

class Rate extends Component {
  constructor() {
    super();
    this.state = {
      rating: '',
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

  handleSubmitRating = async () => {
    this.refs.scrollView.scrollTo({x: width, y: 0, animated: true})
  }

  onScrollEnd = (currentCard) => {
    
    this.setState({
      card1: this.state.card2,
    },
      this.refs.scrollView.scrollTo({x: 0, y: 0, animated: false}))
    this.setState({
      card2: this.state.card3,
    })
  }

  componentDidMount = () => {
      this.setState({
        rating: `${this.props.card1.firstname} is a...`,
        card1: this.props.card1,
        card2: this.props.card2,
        card3: this.props.card3,
    });
  };

  render() {
    if (this.state.card1) {
      return (
        <ScrollView
          style={styles.container}
          pagingEnabled={true}
          scrollEnabled={false}
          horizontal={true}
          ref="scrollView"
          onMomentumScrollEnd={this.onScrollEnd}
          >
          <RateItem
            ratee={this.state.card1}
            rating={this.state.rating}
            handleSlider={(rating) => {this.setState({rating})}}
            handleSubmitRating={this.handleSubmitRating}
            />
          <RateItem
            ratee={this.state.card2}
            rating={this.state.rating}
            handleSlider={(rating) => {this.setState({rating})}}
            handleSubmitRating={this.handleSubmitRating}
            />
          <RateItem
            ratee={this.state.card3}
            rating={this.state.rating}
            handleSlider={(rating) => {this.setState({rating})}}
            handleSubmitRating={this.handleSubmitRating}
            />
        </ScrollView>
      )
      } else {
        return (
          <View/>
        )
      }
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gold',
    flex: 1
  },
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchMoreUsersToRate: actions.fetchMoreUsersToRate,
      submitRating: actions.submitRating
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    card1: state.ratings[state.ratings.length - 1],
    card2: state.ratings[state.ratings.length - 2],
    card3: state.ratings[state.ratings.length - 3],
    id: state.accountData.id
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rate);