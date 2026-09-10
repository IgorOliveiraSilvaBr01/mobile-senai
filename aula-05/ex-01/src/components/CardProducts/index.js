import { Image, Pressable, Text, View } from 'react-native'
import IllustrationProduct from '../../assets/monster.png'
import { BtnCard, ContainerCard, styles, TextTitle } from './style'

// export const CardProducts = () => {
//     return (
//         <View style={styles.containerCard} >
//             <Image source={IllustrationProduct}/>

//             <Text style={styles.textTitle}>Monster Mango Loco</Text>

//             <Pressable style={styles.btnCard} >
//                 <Text>Comprar Agora</Text>
//             </Pressable>
//         </View>
//     )
// }

export const CardProducts = () => {
    return (
        <ContainerCard>
            <Image source={IllustrationProduct} />

            <TextTitle>Monster Mango Loco</TextTitle>

            <BtnCard>
                <TextTitle>
                    Comprar Agora
                </TextTitle>
            </BtnCard>
        </ContainerCard>
    )
}