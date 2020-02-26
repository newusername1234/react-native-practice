
import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <>
        <View>
          <Text>LOOK AT THESE BANANAS</Text>
        </View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <View>
          <Text>LOOK AT THESE BANANAS wow^^^^^^^^^^^^^</Text>
        </View>
      </>
    )
  }
}