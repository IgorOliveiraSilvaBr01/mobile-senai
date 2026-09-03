import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, ScrollView } from "react-native";
import { styles } from "./style"

export default function App() {
  return (
    <SafeAreaView>
       <Text style={styles.paragrafo} >Isso é um parágrafo</Text>
       <Text style={styles.paragrafo2} >Isso é um parágrafo</Text>
    </SafeAreaView>
  );
}
