import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ModalTabsNavigator from './ModalTabsNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerModalNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Início"
            screenOptions={{
                drawerStyle: { width: 250 },
                headerStyle: { backgroundColor: '#2196F3' },
                headerTintColor: '#fff',
            }}
        >
            <Drawer.Screen
                name="Início"
                component={HomeScreen}
                options={{ title: '🏠 Home' }}
            />
            <Drawer.Screen
                name="ModaisFlow"
                component={ModalTabsNavigator}
                options={{ title: '📱 Exemplos de Modais' }}
            />
            <Drawer.Screen
                name="ScrollFlow"
                component={ScrollTabsNavigator}
                options={{ title: '📜 Listas de Rolagem' }}
            />
        </Drawer.Navigator>
    );
}