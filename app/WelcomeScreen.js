import React from 'react';
import { ImageBackground, StyleSheet, View, Text, } from 'react-native';
import FlatButton from '../share/Button';

export default function WelcomeScreen({ navigation: { navigate } }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Meet the</Text>
                    <Text style={styles.text1}>Cyper App!</Text>
                </View>
            </ImageBackground>
            <View style={styles.buttons}>
               <FlatButton
                    text="Get Started"
                    onPress={() => navigate('Home')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        position: 'absolute',
        top: 50, // Adjust as needed
        left: 20, // Adjust as needed
        alignItems: 'flex-start',
    },
    buttons: {
        position: 'absolute',
        bottom: 50, // Adjust as needed
        alignSelf: 'center',
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#fff',
    },
    text1: {
            fontSize: 34,
            fontWeight: 'bold',
            color: '#FD7014',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    }
});
