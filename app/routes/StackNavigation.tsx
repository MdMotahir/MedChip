import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationNames from './NavigationNames';
import {
    HomeScreen,
    MessageListScreen,
    NotificationListScreen
} from '../views';


const Stack = createNativeStackNavigator();

export const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={NavigationNames.HomeScreen}
                component={HomeScreen}
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
        />
    </Stack.Navigator>
    )
}