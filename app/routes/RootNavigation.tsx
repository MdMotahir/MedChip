import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import TabNavigator from './TabNavigation';
// import NavigationNames from './NavigationNames';
import { Text } from 'react-native';


// const Drawer = createDrawerNavigator();


const RootNavigator = () => {
    console.log("Hit-------")
    return (
        <>
            <Text>cjhajcbasakkjnckjanckjascnaknckasnkkjnsckanckasjcjndcsdlncvvcois</Text>
        </>
        // <NavigationContainer>
        //     <Drawer.Navigator 
        //         initialRouteName='Root'
        //     >
        //         <Drawer.Screen name={NavigationNames.Root} component={TabNavigator}/>
        //     </Drawer.Navigator>
        // </NavigationContainer>
    )
}
export default RootNavigator;