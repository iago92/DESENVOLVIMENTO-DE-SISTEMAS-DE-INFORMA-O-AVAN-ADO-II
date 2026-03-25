import { createStackNavigator } from '@react-navigation/stack';
import DrawerModalNavigator from './DrawerModalNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator';
// usa o de baixo pra usar navegacao

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainDrawer" component={ScrollTabsNavigator} />
        </Stack.Navigator>
    );
}