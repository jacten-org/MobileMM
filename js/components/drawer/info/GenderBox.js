import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import colors from '../../../utils/colors';

class GenderBox extends Component {
  constructor() {
    super();

    this.state = {
      genderState: [],
    };
  }

  genderToNumberObject = {
    m: 1,
    f: 2,
    o: 3,
    fm: 4,
    mo: 5,
    fo: 6,
    fmo: 7,
  }

  numberToGenderObject = {
    1: ['m'],
    2: ['f'],
    3: ['o'],
    4: ['f','m'],
    5: ['m','o'],
    6: ['f','o'],
    7: ['f','m','o']
  }

  convertGenderStateToNumber = (arrayOfGender) => {
    let genderString = arrayOfGender.join('')
    return this.genderToNumberObject[genderString]
  }

  onGenderClick = (gender) => {
    let { genderState } = this.state;
    if (genderState.includes(gender)) {
      genderState.splice(genderState.indexOf(gender), 1);
    } else {
    genderState.push(gender)
    genderState.sort()
    }
    let newGenderState = (this.props.type !== 'gender') ? genderState : [gender];
    this.setState({
      genderState: newGenderState
    })
    let genderNumber = this.convertGenderStateToNumber(newGenderState);
    this.props.handleGenderChange(this.props.type, genderNumber);
  }

  componentDidMount = () => {
    this.props.gender &&
    this.setState({
      genderState: this.numberToGenderObject[this.props.gender],
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          style={[styles.button, this.state.genderState.includes('f') ? styles.selected : styles.default]}
          onPress={() => this.onGenderClick('f')} 
          underlayColor='lightgreen'
          >
          <Text style={styles.text}>
            female
          </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={[styles.button, this.state.genderState.includes('m') ? styles.selected : styles.default]}
          onPress={() => this.onGenderClick('m')} 
          underlayColor='lightgreen'
          >
          <Text style={styles.text}>
            male
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, this.state.genderState.includes('o') ? styles.selected : styles.default]}
          onPress={() => this.onGenderClick('o')} 
          underlayColor='lightgreen'
          >
          <Text style={styles.text}>
            other
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    width: 60,
    height: 40,
    flex: 1,
    margin: 5,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: colors.s5,
  },
  default: {
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 2 },
  },
  container: {
    width: 310,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.text
  }
})

export default GenderBox;