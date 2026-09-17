import { View, Button, Text } from 'react-native'

export const Buttons = ({btnPrimary}) => {
    return (
        <View>
            <Text>{btnPrimary}</Text>
            <Button title='Comprar'/>
        </View>
    )
}