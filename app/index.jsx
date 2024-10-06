import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';

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
        <SafeAreaView className="bg-white">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="flex-1 justify-center px-5">
                    <Image
                        source={require('../assets/images/logo.png')}
                        className="w-52 h-32 mb-6 mx-auto"
                        resizeMode="contain"
                    />
                    <Text className="text-center text-3xl font-bold text-gray-800 mb-8">
                        Vítej zpět!
                    </Text>
                    <TextInput
                        className="h-12 bg-white px-4 mb-5 rounded-lg border border-gray-300 text-base shadow-md"
                        placeholder="Email"
                        value={username}
                        onChangeText={setUsername}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#aaa"
                    />
                    <TextInput
                        className="h-12 bg-white px-4 mb-5 rounded-lg border border-gray-300 text-base shadow-md"
                        placeholder="Heslo"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor="#aaa"
                    />
                    <CustomButton title="Přihlasit se" handlePress={submit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}  