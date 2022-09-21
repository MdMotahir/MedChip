import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigation';
import NavigationNames from './NavigationNames';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();





const RootNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='Root'
                    screenOptions={{ headerShown: false }}
                >
                    <Drawer.Screen name={NavigationNames.Root} component={TabNavigator} options={{ swipeEnabled: true }} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
export default RootNavigator;