import React from 'react';
import { View, Text } from 'react-native';

export default function Info(props) {
    // Vytvoření nové proměnné pro 'info' místo přímé změny 'props.info'
    let info = props.info;

    if (props.title === 'narozeniny') {
        info = new Date(info).toLocaleDateString();
    }
    if (info === null) {
        info = 'Není k dispozici';
    }

    return (
        <View className="bg-white p-4 rounded-lg shadow my-2">
            <Text className="text-gray-700">{props.title}: {info}</Text>
        </View>
    );
}
