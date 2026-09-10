// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     containerCard:{
//         backgroundColor: "#000",
//         padding: 20,
//         width: 200
//     },
//     textTitle:{
//         color: "#fff",
//     },
//     btnCard:{
//         backgroundColor: "purple",
//         paddingHorizontal: 25,
//     }

// })

import styled from 'styled-components/native'

export const ContainerCard = styled.View`
    background-color: #000;
    padding: 20px;
    width: 200px;
`

export const TextTitle = styled.Text`
    color: #fff;
` 

export const BtnCard = styled.Pressable`
    background-color: purple;
    padding: 0px 25px 0px 25px;
`