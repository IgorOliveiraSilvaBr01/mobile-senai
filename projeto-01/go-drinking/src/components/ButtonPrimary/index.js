import {Pressable, Text} from 'react-native';

export const ButtonPrimary = ({ title }) => {
    return (
        <Pressable>
            <Text>{title}</Text>
        </Pressable>
    )
}