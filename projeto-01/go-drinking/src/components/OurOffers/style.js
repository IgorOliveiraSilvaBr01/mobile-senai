import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    textTitle: {
        color: colors.colorWhite,
        fontSize: 25,
        fontWeight: 700,
        fontFamily: fonts.fontTitle
    },
    textSpam: {
        color: colors.colorHotDrink,
    },
    scrollContent: {
        gap: 15
    }
})