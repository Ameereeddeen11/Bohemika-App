import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { isLoading } from 'expo-font'

export default function CustomButton(props) {
    return (
        <TouchableOpacity 
            onPress={props.handlePress}
            className={`bg-sky-500/100 rounded-xl min-h-[62px] justify-center items-center shadow-md`}>
            <Text className={`text-slate-50 font-psemibold text-base`}>{props.title}</Text>
        </TouchableOpacity>
    )
}