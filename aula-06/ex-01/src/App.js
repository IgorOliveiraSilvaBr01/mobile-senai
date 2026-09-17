import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cards } from './components/Cards'
import { Buttons } from './components/Buttons'
import { Paragraphs } from './components/Paragraphs'
import { HeadText } from './components/HeadText'

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Cards name='Produto 1'/> 
        <Cards name='Produto 2'/>
        <Cards name='Produto 3'/>

        <Buttons btnPrimary='Props 1'/>
        <Buttons btnPrimary='Props 2'/>
        <Buttons btnPrimary='Props 3'/>

        <Paragraphs paragraph='Bom dia, seja bem-vindo'/>
        <Paragraphs paragraph='Boa tarde, seja bem-vindo'/>
        <Paragraphs paragraph='Boa noite, seja bem-vindo'/>

        <HeadText headText='Título 1'/>
        <HeadText headText='Título 2'/>
        <HeadText headText='Título 3'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: '1',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
});
