import { NavigationContainer } from "@react-navigation/native";
import { createBottomDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

consta Stack = createStackNavigator();

function questao10() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tela1" component={Tela1} />
                <Stack.Screen name="Tela2" component={Tela2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}