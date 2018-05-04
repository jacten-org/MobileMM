import React, { Component } from 'react';
import { Image } from 'react-native';

class HeaderLogo extends Component {
  render() {
    return (
      <Image
        source={require('./MatchaMeLogo.png')}
        style={{ width: 40, height: 40 }}
      />
    );
  }
}

export default HeaderLogo;
