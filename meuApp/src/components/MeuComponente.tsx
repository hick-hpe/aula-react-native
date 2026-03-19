import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro app!</Text>

        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  }
}

export default App;