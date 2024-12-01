import React, { useState } from 'react';
import { View, Image, TextInput, ScrollView, Alert, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Redirect } from 'expo-router';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useGlobalContext } from '../context/GlobalProvider';

export default function Index() {

    const { accessToken } = useGlobalContext();

    if (accessToken) {
        return <Redirect href="/home" />;
    }

    const handleEnter = async () => {
      router.push('/enter-email');
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://mba.bsfaplikace.cz/Auth/login', { username, password });
            await SecureStore.setItemAsync('token', response.data.accessToken);
            await SecureStore.setItemAsync('refreshToken', response.data.refreshToken);
            router.replace('/home');
        } catch (error) {
            Alert.alert('Chyba', 'Nepodařilo se přihlásit');
        }
    };
    
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
                        <CustomButton title="Přihlasit se" handlePress={handleLogin} />
                        <TouchableOpacity className="mt-auto bg-red-600 p-4 rounded-lg shadow my-4" onPress={handleEnter}>
                            <Text className="text-white text-center text-lg">Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}  