import { View, Image } from 'react-native';
import logo from '../../assets/image/logo.png';
import { styles } from './style'
import { OurOffers } from '../../components/OurOffers'
import { useFonts } from 'expo-font';


export const HomeScreen = () => {

    useFonts({
            Oswald : require('../../assets/fonts/Oswald.ttf')
        })

    return (
        <View style={styles.containerHomeScreen}>

            <Image style={styles.logoHome} source={logo}/>

            <OurOffers />

        </View>
    )
}