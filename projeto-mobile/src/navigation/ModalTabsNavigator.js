import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ModalFadeScreen from '../screens/modals/ModalFadeScreen';
import ModalNoneScreen from '../screens/modals/ModalNoneScreen';
import ModalSlideScreen from '../screens/modals/ModalSlideScreen';

const Tab = createBottomTabNavigator();

export default function ModalTabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#2196F3',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Fade" component={ModalFadeScreen} />
            <Tab.Screen name="None" component={ModalNoneScreen} />
            <Tab.Screen name="Slide" component={ModalSlideScreen} />
        </Tab.Navigator>
    );
}