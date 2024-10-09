import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import CustomButton from '../components/CustomButton';

export default function Index() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const submit = () => {
        if (username === 'admin' && password === 'admin') {
            router.replace('/home');
        }
        else {
            Alert.alert('Invalid credentials');
        }
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
                        <Image
                            source={require('../assets/images/logo.png')}
                            style={{ width: 200, height: 100, marginBottom: 30, alignSelf: 'center' }}
                            resizeMode="contain"
                        />
                        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20 }}>
                            Vítej zpět!
                        </Text>
                        <TextInput
                            style={{
                                height: 50,
                                backgroundColor: 'white',
                                paddingHorizontal: 10,
                                marginBottom: 15,
                                borderRadius: 10,
                                borderColor: '#ccc',
                                borderWidth: 1,
                                fontSize: 16,
                            }}
                            placeholder="Email"
                            value={username}
                            onChangeText={setUsername}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor="#aaa"
                        />
                        <TextInput
                            style={{
                                height: 50,
                                backgroundColor: 'white',
                                paddingHorizontal: 10,
                                marginBottom: 15,
                                borderRadius: 10,
                                borderColor: '#ccc',
                                borderWidth: 1,
                                fontSize: 16,
                            }}
                            placeholder="Heslo"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            placeholderTextColor="#aaa"
                        />
                        <CustomButton title="Přihlasit se" handlePress={submit} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}  