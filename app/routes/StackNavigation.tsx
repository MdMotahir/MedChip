import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationNames from './NavigationNames';
import { stackScreenOptions } from './NavigationHelper';

import {
    HomeScreen,
    MessageListScreen,
    NotificationListScreen
} from '../views';


const Stack = createNativeStackNavigator();

export const HomeStack = () => {

    return (
        <Stack.Navigator screenOptions={stackScreenOptions}>
            <Stack.Screen
                name={NavigationNames.HomeScreen}
                component={HomeScreen}
                options={{ title: 'Home', headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export const MessageStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={NavigationNames.MessageListScreen}
                component={MessageListScreen}
                options={{ title: 'Message', headerShown: true }}
            />
        </Stack.Navigator>
    )
}


export const NotificationStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={NavigationNames.NotificationListScreen}
                component={NotificationListScreen}
                options={{ title: 'Notification', headerShown: true }}
            />
        </Stack.Navigator>
    )
}