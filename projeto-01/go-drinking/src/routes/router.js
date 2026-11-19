import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StartScreen } from "../screens/StartScreen"
import { HomeScreen } from "../screens/HomeScreen"
import { ProductsScreen } from "../screens/ProductsScreen"
import { DetailsProduct } from "../screens/DetailsProducts"

export const AppRouter = () => {

    const Stack = createNativeStackNavigator()
    // cria uma variável que recebe uma "funcão" do navigator


    return (
        <NavigationContainer> {/* abriga toda a lógica das rotas */}
            <Stack.Navigator initialRouteName="start" screenOptions={{headerShown: false}}>
                <Stack.Screen name="start" component={StartScreen}/>
                {/* define o nome da tela e define o component/tela que será exibido */}
                <Stack.Screen name="home" component={HomeScreen}/>
                <Stack.Screen name="products" component={ProductsScreen}/>
                <Stack.Screen name="details" component={DetailsProduct}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}