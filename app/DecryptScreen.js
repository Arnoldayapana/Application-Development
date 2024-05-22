import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput as RNTextInput,Keyboard,TouchableWithoutFeedback } from 'react-native';
import EncryptButton from '../share/encryptButtton';
import { Ionicons } from '@expo/vector-icons';

export default function DecryptScreen() {
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const shift = 3; // Same shift value used in the encryption

    // Caesar cipher decryption function
    const caesarCipherDecrypt = (text, shift) => {
        const alphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+=?></~>';
        const shiftedAlphabet = alphabet.slice(-shift) + alphabet.slice(0, -shift);
        return text.split('').map(char => {
            const index = alphabet.indexOf(char);
            return index !== -1 ? shiftedAlphabet[index] : char;
        }).join('');
    };

    const handleDecrypt = () => {
        const decryptedMessage = caesarCipherDecrypt(encryptedMessage, shift);
        setEncryptedMessage(decryptedMessage);
    };

    const handleDelete = () => {
        setEncryptedMessage('');
    };

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="key" size={24} color="#FD7014" style={styles.icon} />
                <Text style={styles.text}>Decrypt Message</Text>
            </View>
            <RNTextInput
                style={styles.input}
                onChangeText={setEncryptedMessage}
                value={encryptedMessage}
                placeholder="Enter your message"
                multiline
            />
            <View style={styles.buttonsContainer}>
                <EncryptButton
                     text="Decrypt"
                     onPress={handleDecrypt}
                     accessibilityLabel="Decrypt button"
                     style={styles.decryptButton}
                     textStyle={styles.decryptButtonText}
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
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
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
        paddingBottom:20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
});
