import React from 'react';
import { ConfigStyles } from '../config';
import Home from '../../assets/svgImages/home.svg';
import Chat from '../../assets/svgImages/chat.svg';
import Bell from '../../assets/svgImages/bell.svg';
import NavigationNames from './NavigationNames';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types';


export const tabScreenOptions: (props: {
    route: RouteProp<ParamListBase, keyof ParamListBase>;
    navigation: any;
}) => BottomTabNavigationOptions = ({ route }) => ({
    title:'',
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
    tabBarShowLabel:false,
    tabBarIconStyle:{
        // marginTop:20,
    },
    // tabBarActiveTintColor:ConfigStyles.SUCCESSFUL_COLOR,
    // tabBarInactiveTintColor:ConfigStyles.DANGER_COLOR,
    tabBarStyle:{
        backgroundColor: ConfigStyles.PRIMARY_COLOR,
    }
})


export const stackScreenOptions: NativeStackNavigationOptions = {
    // headerStyle: {
    //     backgroundColor: ConfigStyles.PRIMARY_COLOR,
    //   },
    //   headerTitleStyle: { color: "red" },
    //   headerBackTitleVisible: true,
}