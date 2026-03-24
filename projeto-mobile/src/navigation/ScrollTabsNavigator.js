import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlatListScreen from '../screens/scroll/FlatListScreen';
import ScrollViewScreen from '../screens/scroll/ScrollViewScreen';
import SectionListScreen from '../screens/scroll/SectionListScreen';

const Tab = createBottomTabNavigator();

export default function ScrollTabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#4CAF50',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: '#fff', height: 60, paddingBottom: 5 }
            }}
        >
            <Tab.Screen name="FlatList" component={FlatListScreen} />
            <Tab.Screen name="ScrollView" component={ScrollViewScreen} />
            <Tab.Screen name="SectionList" component={SectionListScreen} />
        </Tab.Navigator>
    );
}