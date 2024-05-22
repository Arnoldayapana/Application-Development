import React from "react";
import { StyleSheet,TouchableOpacity, Text, View, } from "react-native";

export default function HButton({ text, onPress }){
    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <View style={style.button}>
                    <Text style={style.buttonText}>{text}</Text>
                </View>  
            </TouchableOpacity>
        </>

    )
}
const style =StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#FD7014',
        height: 80,
        width: 310,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',

    }
})