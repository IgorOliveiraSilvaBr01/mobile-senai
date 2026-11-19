import { View, Text, ScrollView } from 'react-native'
import { CardProduct } from '../CardProduct'
import DrinkImage from '../../assets/image/drink-image.png'
import { Styles } from './style'
import { useNavigation } from '@react-navigation/native'

export const OurHighlights = () => {
    const navigation = useNavigation()
    return (
        <View style={Styles.container}>
            <Text style={Styles.textOurHighlights}>Nossos <Text style={Styles.textHighlights}>Destaques</Text></Text>

            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
            </View>

            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
            </View>

            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
            </View>

            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
            </View>
            
            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..." onPress={() => navigation.navigate("details")}/>
            </View>
        </View>
    )
}