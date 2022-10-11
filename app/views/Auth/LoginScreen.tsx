import React, { PropsWithChildren, useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import ChipIcon from "../../../assets/svgImages/Frame.svg";
import GlobalSettings from "../../../assets/svgImages/global-settings.svg";

export const LoginScreen: React.FC<PropsWithChildren> = (props) => {
    const [text, setText] = useState('');

    return (
        <LinearGradient
            colors={['#0D535E', '#0E3242', '#022434']}
            useAngle={true}
            locations={[0,0.5,1]}
            angle={134.35}
            angleCenter={{x:0,y:0}}
            >
            <SafeAreaView style={{height:'100%'}}>
                <View style={{flex:3.2,alignItems:"center",justifyContent:"center"}}>
                    <ChipIcon height={180} width={180}/>
                    <Text style={{color:"white", marginTop:20, fontSize:15}}>Connected Health Intelligence Platform</Text>
                </View>
                <View style={{flex:0.3,alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color:"white", fontSize:20, fontWeight:"600"}}>Sign in to your CHiP account</Text>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{flex:2,alignItems:"center", justifyContent:"space-evenly"}}
                >
                    <TextInput
                        style={{height: 50, backgroundColor: '#013C51', borderRadius:20, width:'75%',padding:10, color:"#fff"}}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        // onChangeText={newText => setText(newText)}
                        // defaultValue={""}
                    />
                    <TextInput
                        style={{height: 50, backgroundColor: '#013C51', borderRadius:20, width:'75%',padding:10, color:"#fff"}}
                        placeholder="Password"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        // onChangeText={newText => setText(newText)}
                        // defaultValue={""}
                    />
                    <TouchableOpacity
                        style={{height: 50, backgroundColor: '#013C51', borderRadius:20, width:'40%', justifyContent:"center"}}
                        // onPress={this.onPress}
                    >
                        <Text style={{
                            color: "white",
                            fontSize: 17,
                            textAlign: "center",
                            fontWeight:"600"
                        }}>Sign In</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <View style={{flex:1,alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingHorizontal:20}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{color:"#fff",marginRight:10, fontSize:15}}>1.3.2</Text>
                        <GlobalSettings height={18} width={20}/>
                    </View>
                    <Text style={{color:"#fff", fontSize:15}}>Forget Password?</Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}