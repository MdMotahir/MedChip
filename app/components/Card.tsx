import React, { PropsWithChildren, useState } from "react";
import { View, Text} from "react-native";
import { ConfigStyles } from "../config";

interface Tprops {
    [key: string]: any
}

export const Card: React.FC<PropsWithChildren> = (props:Tprops) => {
    
    return(
        <View style={{backgroundColor:ConfigStyles.PRIMARY_COLOR, borderRadius:20, alignItems:"center", justifyContent:"center", height:150, width:150, margin:10}}>
            {props.icon}
            <Text style={{color:"white", fontFamily:"Cairo-SemiBold", fontSize:20}}>{props.text}</Text>
        </View>
    )
}