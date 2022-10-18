import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigation';
import NavigationNames from './NavigationNames';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, NotificationListScreen } from '../views';
import { LoginScreen } from '../views/Auth';
import { SideBarScreen } from '../views/Menu';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();




const RootNavigator = () => {
    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle={'light-content'}
                hidden={false}
             />
             {/* its for drawer */}
            {/* <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='Root'
                    screenOptions={{ headerShown: false }}
                >
                    <Drawer.Screen name={NavigationNames.Root} component={TabNavigator} options={{ swipeEnabled: true }} />
                </Drawer.Navigator>
            </NavigationContainer> */}
            
            {/* without drawer */}


            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={NavigationNames.LoginScreen}
                        component={LoginScreen}
                        options={{ title: 'LoginScreen', headerShown: false }}
                    />
                    <Stack.Screen
                        name={NavigationNames.SideBarScreen}
                        component={SideBarScreen}
                        options={{ title: 'SideBarScreen', headerShown: false }}
                    />
                    <Stack.Screen
                        name={NavigationNames.HomeScreen}
                        component={TabNavigator}
                        options={{ title: 'Home', headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaProvider>
    )
}
export default RootNavigator;