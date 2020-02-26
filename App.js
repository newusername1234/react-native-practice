
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  
  state = { isShowingText: true };
  
  componentDidMount() {
    //toggle the state every second
    setInterval(() => (
      this.setState({ 
        isShowingText: !this.state.isShowingText
      })
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='Blinking?' />
        <Blink text='Am I blinking really?' />
        <Blink text='I should be blinking' />
      </View>
    );
  }
}

