import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, MessageStack, NotificationStack } from './StackNavigation';
import NavigationNames from './NavigationNames';
import { ConfigStyles } from '../config';
import Home from '../../assets/svgImages/home.svg';
import Chat from '../../assets/svgImages/chat.svg';
import Bell from '../../assets/svgImages/bell.svg';

import { ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();


const tabScreenOptions: (props: {
    route: RouteProp<ParamListBase, keyof ParamListBase>;
    navigation: any;
}) => BottomTabNavigationOptions = ({ route }) => ({
    title: '',
    tabBarIcon: ({ focused, color, size }) => {
        switch (route.name) {
            case NavigationNames.HomeTab:
                return <Home height={25} width={25} />
            case NavigationNames.MessageTab:
                return <Chat height={25} width={25} />
            case NavigationNames.NotificationTab:
                return <Bell height={25} width={25} />
        }
    },
    tabBarIconStyle: {
        marginTop: 20,
    },
    // tabBarActiveTintColor:ConfigStyles.SUCCESSFUL_COLOR,
    // tabBarInactiveTintColor:ConfigStyles.DANGER_COLOR,
    tabBarStyle: {
        backgroundColor: ConfigStyles.PRIMARY_COLOR,
        alignContent: "center"
    }
})


const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={tabScreenOptions}
        >
            <Tab.Screen name={NavigationNames.HomeTab} component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name={NavigationNames.MessageTab} component={MessageStack} options={{ headerShown: true }} />
            <Tab.Screen name={NavigationNames.NotificationTab} component={NotificationStack} options={{ headerShown: true }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;