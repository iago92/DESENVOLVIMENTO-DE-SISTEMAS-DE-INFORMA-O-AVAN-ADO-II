import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator()

export default funtion App() {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name= "Questao 4" component={Questao4}/>
                <Drawer.Screen name= "Questao 5" component={Questao5}/>
                <Drawer.Screen name= "Questao 8" component={Questao8}/>
                <Drawer.Screen name= "Questao 10" component={Questao10}/>
                <Drawer.Screen name= "Questao 12" component={Questao12}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};