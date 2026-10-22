import { StyleSheet } from "react-native"
import { colors } from "../../themes/colors"

export const style = StyleSheet.create({
    containerProductsScreen:{
        flex: 1,
        backgroundColor: colors.colorDarkPurple,
        gap: 40,
        paddingLeft: 20
    },
    imgLogo:{
        width: 140,
        height: 55
    },
    input:{
        width: 338,
        height: 40,
        backgroundColor: "rgba(222, 30, 236, 0.21)",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#DE1EEC"
    }
})