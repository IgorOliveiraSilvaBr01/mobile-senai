import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const Styles = StyleSheet.create({
    cardContainer:{
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: colors.colorVibrantPink,
        borderRadius: 14,
        backgroundColor: "#270053",
        width: 180,
        height: 250,
        gap: 10,
        alignItems: "center"
    },
    imgProduct:{
        width: 50,
        height: 110
    },
    titleProduct:{
        fontSize: 24,
        fontWeight: "700",
        fontFamily: fonts.fontTitle,
        color: colors.colorWhite,
        alignSelf: "flex-start"
    },
    descriptionProduct:{
        fontSize: 15,
        fontWeight: "400",
        fontFamily: fonts.fontBody,
        color:colors.colorGray
    },
    buttonLearnMore:{
        backgroundColor: colors.colorHotDrink,
        width: 155,
        paddingVertical: 5,
        borderRadius: 5
    },
    textButton:{
        fontSize: 15,
        fontWeight: "400",
        color: colors.colorWhite,
        fontFamily: fonts.fontBody,
        textAlign: "center"
    }
})