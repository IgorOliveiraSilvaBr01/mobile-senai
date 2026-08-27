import { Text, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SerieImg from "./assets/serie.jpg"

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>BreakingBad</Text>
        <Image source={SerieImg}/>
        <Text> A série Breaking Bad conta a história de Walter White, um professor de química que vira produtor de metanfetamina após descobrir um câncer terminal.</Text>
      </View>
    </SafeAreaView>
  );
}
