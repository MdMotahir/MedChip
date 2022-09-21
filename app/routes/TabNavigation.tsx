import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, MessageStack, NotificationStack } from './StackNavigation';
import NavigationNames from './NavigationNames';
import { ConfigStyles } from '../config';
import { tabScreenOptions } from './NavigationHelper';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={tabScreenOptions}
        >
            <Tab.Screen name={NavigationNames.HomeTab} component={HomeStack} options={{headerShown: false}} />
            <Tab.Screen name={NavigationNames.MessageTab} component={MessageStack} options={{ headerShown: false, tabBarBadge:10}} />
            <Tab.Screen name={NavigationNames.NotificationTab} component={NotificationStack} options={{ headerShown: false, tabBarBadge:13 }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;