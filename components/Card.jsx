import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

export default function Card(props) {
    return (
        <View className="flex-row p-4 bg-white rounded-lg shadow-lg h-60 my-4 space-x-4">
            <View className="justify-center">
                <Image
                    source={require('../assets/images/logo2.png')}
                    className="w-24 h-24 rounded-lg"
                />
            </View>

            <View className="flex-1 px-2 justify-center">
                <Text className="text-lg font-bold text-gray-800">{props.nazev}</Text>
                <Text className="text-sm text-gray-500 mt-1">
                    {props.number} This is the mini description of the card content, giving a brief overview.
                </Text>

                <View className="flex-row justify-between items-center mt-4">
                    <View>
                        <Text className="text-gray-500 font-medium">
                            <Icon2 name="calendar" size={15} /> {props.platnostOd}
                        </Text>
                        <Text className="text-gray-500 font-medium mt-1">
                            <Icon name="timer-sand" size={15} /> {props.platnostDo}
                        </Text>
                    </View>

                    <TouchableOpacity className="bg-blue-500 rounded-lg h-10 w-10 flex justify-center items-center">
                        <Icon2 name="text-document-inverted" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
