import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Mensagem from './src/components/Mensagem';

class App extends Component {
  render() {
    let nome = 'IFPR';

    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro App!</Text>

        <Text style={{ color: 'red', fontSize: 25, margin: 25 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Imagem largura={300} altura={300} />

        <Mensagem />

        <Text style={{ fontSize: 30 }}>{nome}</Text>
      </View>
    );
  }
}

interface ImagemProps {
  largura: number
  altura: number
}

class Imagem extends Component<ImagemProps> {

  render() {
    let img = 'https://reactnative.dev/img/tiny_logo.png';

    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>Logo React</Text>
      </View>
    )
  }
}

export default App;