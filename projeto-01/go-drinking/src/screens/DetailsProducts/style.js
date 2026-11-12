import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerDetailsProducts:{
        flex: 1,
        backgroundColor: "#000000"
    },
    featureProducts:{
        backgroundColor: colors.colorDarkPurple,
        flexDirection: "row",
        gap: 45,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 25,
        paddingVertical: 25
    },
    imagesProduct:{
        gap: 20,
    },
    detailsProducts:{
        backgroundColor: "#000000",
        gap: 20,
        paddingTop: 25,
        paddingLeft: 25,
        borderTopWidth: 2,
        borderTopColor: colors.colorHotDrink,
    }, 
    volumeProduct:{
        backgroundColor: colors.colorHotDrink,
        color: colors.colorWhite,
        position: "absolute",
        top: -15,
        right: 25,
        paddingVertical: 4,
        paddingHorizontal: 25
    },
    textTitle:{
        color: colors.colorWhite,
        fontFamily: fonts.fontTitle,
        fontSize: 40,
        fontWeight: "700"
    },
    textHighlight:{
        color: colors.colorHotDrink,
        fontFamily: fonts.fontTitle,
        fontSize: 35,
        fontWeight: "700",
        lineHeight: 45
    },
    text:{
        color: colors.colorGray,
        fontFamily: fonts.fontBody,
        maxWidth: 380,
        fontSize: 15
    }
})