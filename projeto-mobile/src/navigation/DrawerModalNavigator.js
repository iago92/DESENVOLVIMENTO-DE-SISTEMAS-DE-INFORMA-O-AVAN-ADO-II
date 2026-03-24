import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ModalTabsNavigator from './ModalTabsNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerModalNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerStyle: { width: 240 },
                headerStyle: { backgroundColor: '#2196F3' },
                headerTintColor: '#fff',
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />

            <Drawer.Screen name="Modais" component={ModalTabsNavigator} />

            <Drawer.Screen name="Listas de Scroll" component={ScrollTabsNavigator} />
        </Drawer.Navigator>
    );
}