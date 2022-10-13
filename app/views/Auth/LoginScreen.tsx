import React, { PropsWithChildren, useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import ChipIcon from "../../../assets/svgImages/Frame.svg";
import Visible from "../../../assets/svgImages/visible.svg";
import Invisible from "../../../assets/svgImages/invisible.svg";
import GlobalSettings from "../../../assets/svgImages/global-settings.svg";
import { ConfigStyles } from "../../config";
import { useNavigation } from "@react-navigation/native";
import NavigationNames from "../../routes/NavigationNames";

export const LoginScreen: React.FC<PropsWithChildren> = (props) => {
    const navigation = useNavigation();

    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);

    return (
        <LinearGradient
            colors={['#0D535E', '#0E3242', '#022434']}
            useAngle={true}
            locations={[0, 0.5, 1]}
            angle={134.35}
            angleCenter={{ x: 0, y: 0 }}
        >
            <SafeAreaView style={{ height: '100%'}}>
                <View style={ConfigStyles.LoginScreen.IconSection}>
                    <ChipIcon height={180} width={180} />
                    <Text style={ConfigStyles.LoginScreen.IconText}>Connected Health Intelligence Platform</Text>
                </View>
                <View style={ConfigStyles.LoginScreen.HeadingSection}>
                    <Text style={ConfigStyles.LoginScreen.HeadingText}>Sign in to your CHiP account</Text>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={ConfigStyles.LoginScreen.InputSection}
                >
                    <TextInput
                        style={ConfigStyles.LoginScreen.Input}
                        placeholder="Email"
                        placeholderTextColor={ConfigStyles.LIGHT}
                        selectionColor={ConfigStyles.LIGHT}
                    // onChangeText={newText => setText(newText)}
                    // defaultValue={""}
                    />
                    <View style={ConfigStyles.LoginScreen.PasswordSection}>
                        <TextInput
                            style={[ConfigStyles.LoginScreen.Input,{width:'85%'}]}
                            placeholder="Password"
                            placeholderTextColor={ConfigStyles.LIGHT}
                            secureTextEntry={visible}
                            caretHidden={visible}
                            selectionColor={ConfigStyles.LIGHT}
                        // onChangeText={newText => setText(newText)}
                        // defaultValue={""}
                        />
                        <TouchableOpacity
                            style={{width:"15%", alignItems:"center"}}
                            onPress={()=>setVisible(!visible)}
                        >
                            {visible ? <Visible/> : <Invisible/>}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={ConfigStyles.LoginScreen.LoginBTN}
                        onPress={()=>navigation.navigate(NavigationNames.HomeScreen)}
                    >
                        <Text style={ConfigStyles.LoginScreen.LoginText}>Sign In</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <View style={ConfigStyles.LoginScreen.FooterSection}>
                    <View style={ConfigStyles.LoginScreen.VersionSection}>
                        <Text style={ConfigStyles.LoginScreen.VersionText}>1.3.2</Text>
                        <GlobalSettings height={18} width={20} />
                    </View>
                    <Text style={ConfigStyles.LoginScreen.ForgotText}>Forget Password?</Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}