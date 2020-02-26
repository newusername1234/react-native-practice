
import React, { Component } from 'react';
import { View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      //parent with no fixed height and width or flex will have dimensions of 0 and children will not be visible
      <View style={{flex: 1}}>
        <View style={{flex: 3, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}