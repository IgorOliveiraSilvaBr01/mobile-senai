import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinkImage from './assets/link.jpg'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Link</Text>
        <Image source={LinkImage}/>
        <Text>Conhecido como o Herói do Tempo no Reino de Hyrule. Uma criança cujo nome é Link e foi escolhido para salvar o Reino de Hyrule da maldição de Gannondorf</Text>
      </View>
    </SafeAreaView>
  );
}