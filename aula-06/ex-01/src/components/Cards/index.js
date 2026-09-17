import { View, Text, Button } from 'react-native'
// importação da tag view do react-native

// cria a exportação do componente Cards
export const Cards = ({name}) => { // ({}) -> onde sao definidas as props
    return (
        <View>
            <Text>{name}</Text> 
            <Button title='Clique aqui' />
        </View>
    )
}