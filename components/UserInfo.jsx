import React from 'react';
import { View, Text, Image } from 'react-native';

export default function UserInfo(props) {
    return (
        <View className="items-center mb-6">
            <Image
              source={require('../assets/images/unknown.jpg')}
              className="w-32 h-32 rounded-full"
            />
            <Text className="mt-4 text-xl font-semibold">{props.firstname} {props.lastname}</Text>
            <Text className="text-gray-600">{props.email}</Text>
        </View>
    )
}