import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function List(props) {
    return (
        <TouchableOpacity
            className="flex-row justify-between items-center p-4 border-b border-gray-300"
        >
            <View>
                <Text className="text-sm font-semibold text-black">
                {props.repo}
                </Text>
                <Text className="text-lg text-black">{props.title}</Text>
            </View>
            <Text className="text-black text-xs">{props.time}</Text>
        </TouchableOpacity>
    )
}