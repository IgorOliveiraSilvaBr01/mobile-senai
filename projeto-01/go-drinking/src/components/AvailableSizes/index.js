import { View, Text, ScrollView } from 'react-native';
import { CardSize } from '../CardSize';
import DrinkImage from '../../assets/image/drink-image.png';
import BottleImage from '../../assets/image/bottle-image.png'
import { styles } from './style';

export const AvailableSizes = () => {
    return (
        <View style={styles.containerAvailableSizes}>
            <Text style={styles.textTitle}>Tamanhos<Text style={styles.textSpam}>Disponíveis</Text></Text>

            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <CardSize image={DrinkImage} amount="269" measure="ml" />
                <CardSize image={DrinkImage} amount="350" measure="ml" />
                <CardSize image={DrinkImage} amount="429" measure="ml" />
                <CardSize image={DrinkImage} amount="609" measure="ml" />
                <CardSize image={BottleImage} amount="1,5" measure="l" />
                <CardSize image={BottleImage} amount="2,5" measure="l" />
            </ScrollView>
        </View>
    )
}