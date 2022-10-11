import React, { PropsWithChildren } from "react";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-svg";



export const LoginScreen: React.FC<PropsWithChildren> = (props) => {

    return (
        <LinearGradient
            colors={['#0D535E', '#0E3242', '#022434']}
            useAngle={true}
            locations={[0,0.5,1]}
            angle={134.35}
            angleCenter={{x:0,y:0}}
            >
            <SafeAreaView style={{height:'100%'}}>
                    <Text >sign in with Facebook</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}

// background: linear-gradient(134.35deg, #0D535E -70.42%, #0E3242 20.86%, #022434 98.3%);