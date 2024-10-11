import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { router, Link } from 'expo-router';

export default function Header() {
    const submit = () => {
        router.navigate('/messages');
    }
    return (
        <View className="bg-blue-600 p-4 flex-row justify-between">
            <View className="flex-col justify-center">
                <Text className="text-white text-2xl font-bold">Bohemika</Text>
            </View>
            <View className="flex-col justify-center items-end">
                <View className="flex-row justify-between">
                    <TouchableOpacity className="px-3"><Icon name="bell" size={30} color="white" /></TouchableOpacity>
                    <TouchableOpacity className="scale-x-[-1]" onPress={submit}><Icon name="chat" size={30} color="white" /></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}