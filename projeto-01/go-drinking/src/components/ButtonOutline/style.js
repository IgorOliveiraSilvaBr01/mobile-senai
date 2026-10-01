import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    btnOutline:{
        borderWidth: 2,
        borderColor: colors.colorCyan,
        paddingVertical: 10,
        borderRadius: 7,
        width: 350
    },

    tetxBtnOutline:{
        color: colors.colorRoyalPurple,
        fontSize: 18,
        textAlign: "center"
    }
})