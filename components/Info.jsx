import React from 'react';
import { View, Text } from 'react-native';

export default function Info(props) {
    if (props.title === 'narozeniny') {
      props.info = new Date(props.info).toLocaleDateString();
    }
    return (
        <View className="bg-white p-4 rounded-lg shadow my-2">
              <Text className="text-gray-700">{props.title}: {props.info}</Text>
        </View>
    )
}