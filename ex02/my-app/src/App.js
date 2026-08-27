// import { comando } from 'react-native' -- é a importação do comando Text do react native, serve para que o aparelho enteda que esta sendo inserido um comando de text

import { Text, View, Image } from "react-native";
// faz o import das tags text, view e image do react-native
import { SafeAreaView } from "react-native-safe-area-context";
// faz o import da tag SafeAreaView da bibloteca safe area
// import MinhaImagem from  '../assets/link.jpg'
// faz o import da imagem e atribui um nome/apelido a imagem

import link from './assets/link.jpg'
import oak from './assets/oak.jpg'
import careca from './assets/careca.jpg'
import canguru from './assets/canguru.jpg'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Image source={link}/>
          <Image source={oak}/>
          <Image source={careca}/>
          <Image source={canguru}/>
          <Text>Igor Oliveira da Silva</Text>
          <Text>Jovem Aprendiz</Text>
        </View>

        <View>
          <Text>Igor Oliveira da Silva</Text>
          <Text>Desenvolvedor Full Stack Júnior</Text>
        </View>

        <View>
          <Text>Interestellar</Text>
          <Text>Vinland Saga</Text>
          <Text>Ben10</Text>
          <Text>Avenida Brasil</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
