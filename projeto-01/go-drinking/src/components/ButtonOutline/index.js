import { Pressable, Text } from "react-native"
import { styles } from "./style"

export const ButonOutline = ({ title }) => {
    return (
        <Pressable style={styles.btnOutline} >
            <Text style={styles.tetxBtnOutline} >{title}</Text>
        </Pressable>
    )
}