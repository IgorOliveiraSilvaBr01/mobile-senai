import { View, Image, Text, Pressable } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { ButonOutline } from '../../components/ButtonOutline';
import logo from '../../assets/image/logo.png';
import { styles } from './style';
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native';


// exportação do objeto StartScreen, permite que seja acessado externamente
export const StartScreen = () => {

    useFonts({
        Oswald : require('../../assets/fonts/Oswald.ttf')
    })

    const navigation = useNavigation();
    // cria ua=ma variável que recebe uma funçaõ que cuida de toda a lógica de navegação

    return (
        <View style={styles.containerStartScreen}>

            <Image source={logo}/>

            <Text style={styles.textWelcome}>
                Seu app para comprar energéticos de forma rápida, prática e segura. Encontre suas marcas favoritas e receba onde estiver.
            </Text>

            <ButtonPrimary title={"Entrar"} onPress={() => navigation.navigate("home")}/>

            <ButonOutline title={"Cadastrar"}/>

        </View>
    )
}