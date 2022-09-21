import React, {type PropsWithChildren} from 'react';
import { StatusBar, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ConfigStyles } from '../../config';
import { Config } from '../../config';

export const HomeScreen: React.FC<PropsWithChildren> = (props) => {

    return (
            <SafeAreaView style={styles.container}>
                <linearGradient>
                    <Text>hi</Text>
                </linearGradient>
            </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    }
  });