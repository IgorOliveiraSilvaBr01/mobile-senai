import { View, Text, Image, Pressable } from 'react-native'
import { Styles } from './style'

export const CardProduct = ({image, title, description}) => {
    return (
        <View style={Styles.cardContainer}>
            <Image source={image} style={Styles.imgProduct}/>
            <View>
                <Text style={Styles.titleProduct}>{title}</Text>
                <Text style={Styles.descriptionProduct}>{description}</Text>
            </View>

            <Pressable style={Styles.buttonLearnMore}>
                <Text style={Styles.textButton}>Saiba Mais</Text>
            </Pressable>
        </View>
    )
}