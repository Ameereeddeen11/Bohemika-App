import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

export default function Profile() {
    const Card = styled(View, 'bg-white p-4 rounded-lg shadow-md w-3/4');
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="flex-1 items-center justify-center bg-gray-100">
                    <Card>
                        <Text className="text-xl font-bold text-gray-700">Welcome to Home Screen</Text>
                        <Text className="mt-2 text-gray-500">This is a card component made with NativeWind.</Text>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}