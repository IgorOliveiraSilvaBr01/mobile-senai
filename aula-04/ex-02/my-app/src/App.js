import { SafeAreaView } from 'react-native-safe-area-context'
import {View, Text, Image, Button} from "react-native";
import perfil from "./assets/neymar.jpg";

export default function App() {
  return (
    <SafeAreaView>

      <Image source={perfil}/>

      <View>
        <Text>Neymar Júnior</Text>
        <Text>neymar01@gmail.com</Text>
        <Button title='Editar perfil' color="purple"/>
        <Button title='Sair' color="dark-blue"/>
      </View>
    </SafeAreaView>
  );
}