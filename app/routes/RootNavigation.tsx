import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigation';
import NavigationNames from './NavigationNames';


const Drawer = createDrawerNavigator();





const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName='Root'
                screenOptions={{headerShown:false}}
            >
                <Drawer.Screen name={NavigationNames.Root} component={TabNavigator} options={{swipeEnabled:true}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigator;