import { useNavigation } from "@react-navigation/native";
import React, { PropsWithChildren, useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import Menu from "../../../assets/svgImages/menu.svg";
import MenuClose from "../../../assets/svgImages/menuClose.svg";
import Privacy from "../../../assets/svgImages/privacy.svg";
import Setting from "../../../assets/svgImages/setting.svg";
import Profile from "../../../assets/svgImages/whiteProfile.svg";
import Help from "../../../assets/svgImages/help.svg";
import Logout from "../../../assets/svgImages/logout.svg";




export const SideBarScreen: React.FC<PropsWithChildren> = (props) => {
    const navigation = useNavigation();

    return (
        <LinearGradient
                style={{height:"100%"}}
                colors={['rgba(4, 62, 70, 1)', 'rgba(14, 50, 66, 1)', 'rgba(2, 36, 52, 1)']}
                useAngle={true}
                locations={[0.02,0.30,0.68]}
                angle={134.35}
                angleCenter={{x:0,y:0}}
                >
                    <SafeAreaView style={{flex:1}}>
                        <View style={{flex:0.5, justifyContent:"center", paddingHorizontal: 20, alignItems:"baseline"}}>
                            <TouchableOpacity
                                onPress={()=>navigation.goBack()}
                            >
                                <Menu height={30} width={30} style={{transform: [{ rotate: '90deg'}]}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:4, justifyContent:"space-around", alignItems:"center"}}>
                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Logout height={35} width={35}/>
                                <Text style={{fontFamily:"Cairo-SemiBold", fontSize:24, color:"white"}}>Log Out</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Profile height={35} width={35}/>
                                <Text style={{fontFamily:"Cairo-SemiBold", fontSize:24, color:"white"}}>My Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Setting height={35} width={35}/>
                                <Text style={{fontFamily:"Cairo-SemiBold", fontSize:24, color:"white"}}>Settings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Help height={35} width={35}/>
                                <Text style={{fontFamily:"Cairo-SemiBold", fontSize:24, color:"white"}}>Help</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{alignItems:"center"}}>
                                <Privacy height={35} width={35}/>
                                <Text style={{fontFamily:"Cairo-SemiBold", fontSize:24, color:"white"}}>Privacy</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                            <TouchableOpacity
                                onPress={()=>navigation.goBack()}
                            >
                                <MenuClose height={50} width={50}/>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
        </LinearGradient>
    )
}