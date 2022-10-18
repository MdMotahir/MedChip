import React, {type PropsWithChildren} from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ConfigStyles } from '../../config';
import { Config } from '../../config';
import ChipIcon from "../../../assets/svgImages/Frame.svg";
import Profile from "../../../assets/svgImages/profile.svg";
import Calendar from "../../../assets/svgImages/calendar.svg";
import Broadcast from "../../../assets/svgImages/broadcast.svg";
import Patients from "../../../assets/svgImages/patients.svg";
import Menu from "../../../assets/svgImages/menu.svg";
import { Card } from "../../components/Card";
import { useNavigation } from '@react-navigation/native';
import NavigationNames from '../../routes/NavigationNames';


export const HomeScreen: React.FC<PropsWithChildren> = (props) => {
    const navigation = useNavigation();


    return (
        <LinearGradient
                style={{height:'100%'}}
                colors={['rgba(4, 62, 70, 1)', 'rgba(14, 50, 66, 1)', 'rgba(2, 36, 52, 1)']}
                useAngle={true}
                locations={[0.02,0.30,0.68]}
                angle={134.35}
                angleCenter={{x:0,y:0}}
                >
            <SafeAreaView style={{flex:1}}>
                    <View style={{flex:0.5, flexDirection:"row",alignItems:"center", justifyContent:"space-between",paddingHorizontal: 20}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate(NavigationNames.SideBarScreen)}
                        >
                            <Menu height={30} width={30}/>
                        </TouchableOpacity>
                        <ChipIcon height={50} width={50}/>
                    </View>
                    <View style={{flex:0.5, justifyContent:"center", paddingHorizontal:20}}>
                            <Text style={{fontFamily:"Cairo-Bold", fontSize:25, color:"white"}}>Hi Jonathan!</Text>
                            <Text style={{fontFamily:"Cairo-Regular", fontSize:25, color:"white", lineHeight:32}}>Welcome to CHiP.</Text>
                    </View>
                    <View style={{flex:1.5, alignItems:"center", justifyContent:"center"}}>
                        <View style={{width:'90%', borderRadius:30, backgroundColor:ConfigStyles.PRIMARY_COLOR, padding:20}}>
                            <View style={{borderBottomWidth:1, borderBottomColor:"#FAFAFA"}}>
                                <Text style={{color:"white", fontFamily:"Cairo-SemiBold", fontSize:20}}>Activity</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", padding:10}}>
                                <ChipIcon height={30} width={30}/>
                                <View style={{marginLeft:10, paddingHorizontal:10}}>
                                    <Text style={{color:"white", fontFamily:"Cairo-Regular", fontSize:17}}>Lorem ipsum dolor sit amet, dolor stm cons ectetur adipiscing.</Text>    
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:2.5, flexWrap:"wrap", flexDirection:"row", padding:20, justifyContent:"space-evenly"}}>
                        <Card
                            text={"Profile"}
                            icon={<Profile height={50} width={50}/>}
                        />
                        <Card
                            text={"Calender"}
                            icon={<Calendar height={50} width={50}/>}
                        />
                        <Card
                            text={"Patients"}
                            icon={<Patients height={50} width={50}/>}
                        />
                        <Card
                            text={"Broadcasts"}
                            icon={<Broadcast height={50} width={50}/>}
                        />
                    </View>
            </SafeAreaView>
        </LinearGradient>
    )
}
