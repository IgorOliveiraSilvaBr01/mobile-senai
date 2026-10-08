import { View, Text, ScrollView, Image } from "react-native";
import card1 from "../../assets/image/card-1.png"
import card2 from "../../assets/image/card-2.png"
import card3 from "../../assets/image/card-3.png"
import { styles } from "./style";

export const OurOffers = () => {
    return (
        <View>

            <Text style={styles.textTitle}>Nossas <Text style={styles.textSpam}>Ofertas</Text></Text> 
            {/* como o react-native não possui spam, para anexar palavras com estilos diferentes basta usar <Text> */}

            <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
                <Image source={card1}/>
                <Image source={card2}/>
                <Image source={card3}/>
            </ScrollView>

        </View>
    )
}