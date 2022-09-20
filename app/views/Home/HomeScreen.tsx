import React, {type PropsWithChildren} from 'react';
import { Text,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ConfigStyles } from '../../config';
import { Config } from '../../config';

export const HomeScreen: React.FC<PropsWithChildren> = (props) => {

    return (
        <LinearGradient
                colors={['rgba(1, 177, 184, 1)', 'rgba(0, 24, 35, 1)', 'rgba(0, 24, 35, 1)']}
                useAngle={true}
                locations={[0.0,0.2,0.97]}
                angle={134.35}
                >
            <SafeAreaView style={{height:'100%'}}>
                    <Text>sign in with Facebook</Text>
            </SafeAreaView>
        </LinearGradient>

    )
}
