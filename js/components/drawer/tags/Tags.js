import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Button, View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';


import actions from '../../../redux/actions/tags_actions';
import X from './../../globals/buttons/X';
import TagsItem from './TagsItem';
import tagsArray from './tagsArray';
import SelectedHolder from './SelectedHolder';
import colors from '../../../utils/colors';

class Tags extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({navigation}) => {
    return {
    headerRight: <X tags onTap={() => navigation.navigate('Main')}/>,
      drawerIcon: () => (
        <Image
          style={{width: 41, height: 30, tintColor: colors.s3}}
          source={require('./../../../icons/png-64px/pricetags_64px.png')}
          /> 
      ),
    }
  };

  handleTagTap = (route, selected, tag) => {
    let type = route === 'You' ? 'user' : 'pref';
    let tagArray = this.props.tags[type];
    if (selected) {
      let index = tagArray.indexOf(tag);
      tagArray.splice(index, 1);
    } else {
      if (tagArray.length === 3) {
        tagArray.pop();
      }
      tagArray.push(tag)
    }
    this.props.updateTagsState(type, tagArray)
  }

  render() {

    let route = this.props.navigation.state.routeName;
    let { height, width } = Dimensions.get('window');
    let tagsData = route === 'You'
      ? this.props.tags.user
      : this.props.tags.pref;
    let colorRoute = route === 'You' 
      ? colors.body 
      : '#fb9692';

    return (
      <View style={[styles.container, {backgroundColor: colors.body}]}>
        <SelectedHolder
          tags={tagsData}
          route={route}
          onTap={this.handleTagTap}
          />
        <ScrollView 
          style={styles.container} 
          contentContainerStyle={{justifyContent: 'center'}}
          >
          <View style={[styles.scroll, { backgroundColor: colors.body }]}>
          {
            tagsArray.map((tag) => {
              let selected = tagsData.includes(tag)
              return <TagsItem 
                text={tag} 
                key={tag}
                selected={selected} 
                color={colorRoute}
                onTap={() => this.handleTagTap(route, selected, tag)} 
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
    marginBottom: 15,
    justifyContent: 'center', 
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.body,
  },
  text: {
    color: colors.text,
    margin: 20, 
    fontSize: 26, 
    textAlign: 'center', 
  },
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