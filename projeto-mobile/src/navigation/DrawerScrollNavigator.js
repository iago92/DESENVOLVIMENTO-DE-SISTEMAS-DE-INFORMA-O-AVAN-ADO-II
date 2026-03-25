import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ModalTabsNavigator from './ModalTabsNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerModalNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                drawerStyle: { width: 250 },
                headerStyle: { backgroundColor: '#2196F3' },
                headerTintColor: '#fff',
            }}
        >
            <Drawer.Screen
                name="Inicio"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Drawer.Screen
                name="Modal"
                component={ModalTabsNavigator}
                options={{ title: 'Modal' }}
            />
            <Drawer.Screen
                name="Scroll"
                component={ScrollTabsNavigator}
                options={{ title: 'Scroll' }}
            />
        </Drawer.Navigator>
    );
}