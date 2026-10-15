import { Text, View, Image, TextInput, Button, TouchableOpacity, Pressable  } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SerieImg from "./assets/serie.jpg"

export default function App() {
  return (
    <SafeAreaView>
      <Text>Email:</Text>
      <TextInput placeholder="Digite aqui" />
      <TextInput placeholder="Digite sua senha" secureTextEntry={true}/>
      <Button title='Clique aqui' color="aqua" />
      <TouchableOpacity>
        <Text>Clique aqui</Text>
      </TouchableOpacity>

      <Pressable>
        <Text>Clique aqui</Text>
        
      </Pressable>
    </SafeAreaView>
  );
}
