import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Button, View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';


import actions from '../../../redux/actions/tags_actions';
import X from './../../globals/buttons/X';
import TagsItem from './TagsItem';
import tagsArray from './tagsArray';
import SelectedHolder from './SelectedHolder';

class Tags extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({navigation}) => {
    return {
    headerRight: <X tags onTap={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: 'white'}}
          source={require('./../../../icons/png-64px/pricetags_64px.png')}
          /> 
      ),
    }
  };

  render() {
    let route = this.props.navigation.state.routeName;
    let tagsData = route === 'You'
      ? this.props.tags.user
      : this.props.tags.pref;
    let {height, width} = Dimensions.get('window');
    console.log(height, width)
    return (
      <View style={[styles.container, {backgroundColor: route !== 'You' ? '#c0d6e4' : '#fb9692'}]}>
        <SelectedHolder
          tags={tagsData}
          />
        <ScrollView style={styles.container}>
          <View style={styles.scroll}>
          {
            tagsArray.map((tag) => {
              let selected = tagsData.includes(tag)
              return <TagsItem 
                text={tag} 
                key={tag}
                selected={selected} 
                onTap={() => this.addToTagArray(tag)} 
                />
            })
          }
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateTagsState: actions.updateTagsState,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    savedStatus: state.savedStatus,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);