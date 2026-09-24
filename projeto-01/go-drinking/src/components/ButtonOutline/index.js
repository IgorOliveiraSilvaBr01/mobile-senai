import { Pressable, Text } from "react-native"

export const ButonOutline = ({ title }) => {
    return (
        <Pressable>
            <Text>{title}</Text>
        </Pressable>
    )
}