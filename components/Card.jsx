import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

export default function Card() {
    return (
        <View className="flex-row p-4 bg-white rounded-lg shadow-md h-60">
            <View className="justify-center">
                <Image
                    source={require('../assets/images/logo.jpg')}
                    className="w-20 h-20 rounded-full"
                />
            </View>

            <View className="flex-1 px-4 justify-center">
                <Text className="text-xl font-bold">Main Title</Text>
                <Text className="text-sm text-gray-600">This is the mini description of the card content, giving a brief overview. {"\n"}</Text>
                <View className="flex-row justify-between p-4 bg-white rounded-lg">
                    <View className="justify-center">
                        <Text className="text-gray-500 font-semibold">
                            <Icon2 name="calendar" size={15}/> 12.10.2024
                        </Text>
                        <Text className="text-gray-500 font-semibold py-1">
                            <Icon name="timer-sand" size={15} /> 12.12.2025
                        </Text>
                    </View>
                    <View className="flex-col justify-center items-end">
                        <TouchableOpacity className="bg-sky-500/100 rounded-xl min-h-[40px] min-w-[60px] justify-center items-center">
                            <Text className={"text-slate-50 font-psemibold text-base"}><Icon2 name="text-document-inverted" size={20}/></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}