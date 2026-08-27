import { Text, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FilmeImg from './assets/filme1.jpg'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Interestelar</Text>
        <Image source = {FilmeImg}/>
        <Text>O filme Interestelar conta a história de um futuro onde a Terra está morrendo por falta de comida e excesso de poeira.</Text>
      </View>
    </SafeAreaView>
  );
}