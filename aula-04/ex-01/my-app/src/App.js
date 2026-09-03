import { SafeAreaView } from 'react-native-safe-area-context'
import {View, Text, TextInput, Image, Button} from "react-native";
import perfil from "./assets/neymar.jpg";

export default function App() {
  return (
    <SafeAreaView>

      <Image source={perfil}/>

      <View>
        <Text>Nome:</Text>
        <TextInput placeholder='Digite seu nome'/>
      </View>

      <View>
        <Text>Email:</Text>
        <TextInput placeholder='Digite seu email'/>
      </View>

      <View>
        <Text>Senha:</Text>
        <TextInput placeholder='Digite sua senha' secureTextEntry={true}/>
      </View>

      <Button title='clique aqui' color="purple"/>

    </SafeAreaView>
  );
}
