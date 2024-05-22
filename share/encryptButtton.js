import React from "react";
import { StyleSheet,TouchableOpacity, Text, View, } from "react-native";

export default function EncryptButton({ text, onPress }){
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
        borderRadius: 13,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#FD7014',
        height: 50,
        width: 140,
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
})