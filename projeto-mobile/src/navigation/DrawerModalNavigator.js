import { NavigationContainer } from "@react-navigation/native";
import ModalFadeScreen from "../screens/modals/ModalFadeScreen";
import ModalNoneScreen from "../screens/modals/ModalNoneScreen";
import ModalSlideScreen from "../screens/modals/ModalSlideScreen";

export default function DrawerModalNavigator() {
    return (
        <NavigationContainer>   
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Modal Fade" component={ModalFadeScreen} />
                <Drawer.Screen name="Modal None" component={ModalNoneScreen} />
                <Drawer.Screen name="Modal Slide" component={ModalSlideScreen} />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}