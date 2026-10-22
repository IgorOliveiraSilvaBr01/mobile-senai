import { View, Text, ScrollView } from 'react-native'
import { CardProduct } from '../CardProduct'
import DrinkImage from '../../assets/image/drink-image.png'
import { Styles } from './style'

export const OurHighlights = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.textOurHighlights}>Nossos <Text style={Styles.textHighlights}>Destaques</Text></Text>

            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>

            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>

            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>

            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>
            
            <View style={Styles.containerProducts}>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={DrinkImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>
        </View>
    )
}