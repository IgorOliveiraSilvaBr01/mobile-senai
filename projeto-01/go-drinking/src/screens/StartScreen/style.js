import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerStartScreen:{
        flex: 1, // faz com que o container ocupe a tela inteira
        backgroundColor: colors.colorDarkPurple,
        justifyContent: "center",
        alignItems: "center",
        gap: 40
    },
    textWelcome:{
        fontSize: 20,
        fontFamily: fonts.fontBody,
        color: colors.colorGray,
        textAlign: "center"
    }
})