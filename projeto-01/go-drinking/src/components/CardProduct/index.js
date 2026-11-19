import { View, Text, Image, Pressable } from 'react-native'
import { Styles } from './style'

export const CardProduct = ({image, title, description, onPress}) => {
    return (
        <View style={Styles.cardContainer}>
            <Image source={image} style={Styles.imgProduct}/>
            <View>
                <Text style={Styles.titleProduct}>{title}</Text>
                <Text style={Styles.descriptionProduct}>{description}</Text>
            </View>

            <Pressable style={Styles.buttonLearnMore} onPress={onPress}>
                <Text style={Styles.textButton}>Saiba Mais</Text>
            </Pressable>
        </View>
    )
}