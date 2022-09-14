import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeStack, MessageStack, NotificationStack} from './StackNavigation';
import NavigationNames from './NavigationNames';

const Tab = createBottomTabNavigator();



const TabNavigator = () => {
    console.log("Hit")
    return (
        <Tab.Navigator>
            <Tab.Screen name={NavigationNames.HomeTab} component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name={NavigationNames.MessageTab} component={MessageStack} options={{ headerShown: false }}/>
            <Tab.Screen name={NavigationNames.NotificationTab} component={NotificationStack} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;