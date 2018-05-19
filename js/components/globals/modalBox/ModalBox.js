import React from 'react';
import { 
  Text, 
  View, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Dimensions,
} from 'react-native';

import VoteButton from '../buttons/Vote';
import colors from '../../../utils/colors';

const ModalBox = (props) => {

let {
  title,
  body,
  button1Text,
  onButton1Press,
  button1Color,
  button2Text,
  onButton2Press,
  button2Color,
} = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.body}>
          {body}
        </Text>
      </View>
      <View>
        <VoteButton
          onPress={onButton1Press}
          title={button1Text}
          color={button1Color}
          />
        <VoteButton
          negative
          onPress={onButton2Press}
          title={button2Text}
          color={button2Color}
          />
      </View>
    </View>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 100,
    height: width - 80,
    backgroundColor: colors.body,
    borderLeftWidth: 6,
    borderColor: colors.s4,
  },
  title:{
    textAlign: 'center',
    color: colors.text,
    fontSize: 25,
    fontWeight: '500',
    margin: 5,
  },
  body: {
    textAlign: 'center',
    color: colors.text,
    fontSize: 20,
    fontWeight: '300',
    margin: 5,
  },
  header: {
    padding: 20,
  },
})

export default ModalBox;