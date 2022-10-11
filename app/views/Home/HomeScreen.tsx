import React, {type PropsWithChildren} from 'react';
import { Text,StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ConfigStyles } from '../../config';
import { Config } from '../../config';

export const HomeScreen: React.FC<PropsWithChildren> = (props) => {

    return (
        <LinearGradient
                colors={['rgba(4, 62, 70, 1)', 'rgba(14, 50, 66, 1)', 'rgba(2, 36, 52, 1)']}
                useAngle={true}
                locations={[0.02,0.30,0.68]}
                angle={134.35}
                angleCenter={{x:0,y:0}}
                >
            <SafeAreaView style={{height:'100%'}}>
                    <Text>sign in with Facebook</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}
