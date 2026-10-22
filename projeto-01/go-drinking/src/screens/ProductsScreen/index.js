import { ScrollView, Image, TextInput } from "react-native"
import logo from '../../assets/image/logo.png'
import filterIcon from '../../assets/image/filter-icon.png'
import { style } from "./style"

export const ProductsScreen = () => {
    return (
        <ScrollView contentContainerStyle={style.containerProductsSceen}>

            <Image source={logo}/>

            <View>
                <TextInput source={filterIcon}/>
            </View>

        </ScrollView>
    )
}