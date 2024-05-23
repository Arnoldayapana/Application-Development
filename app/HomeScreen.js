import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import HButton from '../share/HomeButton';

function HomeScreen() {
    const navigation = useNavigation()
    return (
        <>
        <View style={styles.container}>
            <Image source={require('../assets/encrypt.png')} style={styles.Images}/>
            <Text style={styles.text}> Choose To start! </Text>
            <>
            <HButton
            text="Encrypt Message"
            onPress={() => navigation.navigate('Encrypt')}/>
            <HButton
            text="Decrypt Message"
            onPress={() => navigation.navigate('Decrypt')}/>
            </>

        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        gap:18,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#222831'
    },
    con2: {
        backgroundColor: '#fff',

    },
    Images: {
        marginTop: '10%',
        width: 300,
        height: 400,
        resizeMode: "contain",

    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#fff'
    },
});

export default HomeScreen;
