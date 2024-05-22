import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput as RNTextInput,Keyboard,TouchableWithoutFeedback } from 'react-native';
import EncryptButton from '../share/encryptButtton';
import { Ionicons } from '@expo/vector-icons';

export default function EncryptScreen() {
    const navigation = useNavigation();
    const [message, setMessage] = useState('');
    const shift = 3; // You can change the shift value to any desired number

        // Caesar cipher encryption function
    const caesarCipherEncrypt = (text, shift) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+=?></~>';
        const shiftedAlphabet = alphabet.slice(shift % 62) + alphabet.slice(0, shift % 62);
        return text.split('').map(char => {
            const index = alphabet.indexOf(char);
            return index !== -1 ? shiftedAlphabet[index] : char;
        }).join('');
    };

    const handleEncrypt = () => {
        const encryptedMessage = caesarCipherEncrypt(message, shift);
        setMessage(encryptedMessage);
    };

    const handleDelete = () => {
        setMessage('');
    };

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="lock-closed" size={24} color="#FD7014" style={styles.icon} />
                <Text style={styles.text}>Encrypt Message</Text>
            </View>

            <RNTextInput
                style={styles.input}
                onChangeText={setMessage}
                value={message}
                placeholder="Enter your message"
                multiline
            />
            <View style={styles.buttonsContainer}>
                <EncryptButton
                     text="Encrypt"
                     onPress={handleEncrypt}
                     accessibilityLabel="Encrypt button"
                />
                <EncryptButton
                    text="Delete"
                    onPress={handleDelete}
                    accessibilityLabel="Delete button"
                    style={styles.deleteButton}
                    textStyle={styles.deleteButtonText}
                />
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#222831',
        gap: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 29,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    input: {
        height: 420,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 20,
        width: '95%',
        textAlignVertical: 'top',
        borderRadius: 13,
        color:'#000',
        backgroundColor:'white'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
    },
    deleteButton: {
        backgroundColor: '#fff',
        marginLeft: 10,
    },
    deleteButtonText: {
        color: '#fff',
    },
    icon: {
        marginRight: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
});

