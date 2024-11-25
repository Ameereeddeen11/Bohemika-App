import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from 'react-native-vector-icons';

export default function List(props) {
    const done = <><MaterialIcons name='done' size={18} color="green" /><Text className="text-sm font-semibold tracking-wide">passed</Text></>;
    const waiting = <><MaterialIcons name='hourglass-bottom' size={14} color="orange" /><Text className="text-sm font-semibold tracking-wide">waiting</Text></>;
    return (
        <TouchableOpacity
            className="flex-row justify-between items-center p-4 border-b border-gray-300 mx-2"
        >
            <View>
                <Text className="text-sm font-semibold text-black">
                {props.repo}
                </Text>
                <Text className="text-lg text-black">{props.title}</Text>
                <Text className="text-black text-xs my-2">{props.progress ? done : waiting}</Text>
            </View>
            <Text className="text-black text-xs">{props.time}</Text>
        </TouchableOpacity>
    )
}