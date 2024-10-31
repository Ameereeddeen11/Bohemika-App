import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

export default function Card(props) {
    return (
        <View className="flex-row p-4 bg-white rounded-lg shadow-md h-60 my-2">
            <View className="justify-center">
                <Image
                    source={require('../assets/images/logo2.png')}
                    className="w-20 h-20"
                />
            </View>

            <View className="flex-1 px-4 justify-center">
                <Text className="text-xl font-bold">{props.nazev}</Text>
                <Text className="text-sm text-gray-600">{props.number} This is the mini description of the card content, giving a brief overview. {"\n"}</Text>
                <View className="flex-row justify-between p-4 bg-white rounded-lg">
                    <View className="justify-center">
                        <Text className="text-gray-500 font-semibold">
                            <Icon2 name="calendar" size={15}/> {props.platnostOd}
                        </Text>
                        <Text className="text-gray-500 font-semibold py-1">
                            <Icon name="timer-sand" size={15} /> {props.platnostDo}
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