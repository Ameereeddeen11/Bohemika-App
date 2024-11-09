import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';

export default function Create() {
    return(
        <SafeAreaView>
            <Header/>
            <ScrollView className="p-4" contentContainerStyle={{paddingBottom: 20}}>
                <View className="flex-1 justify-center items-center bg-gray-100">
                    <Text className="text-lg font-bold mb-6">Vyberte jsi</Text>
                    <TouchableOpacity 
                        className="bg-blue-500 p-4 rounded-lg mb-4 h-64 w-80 items-center justify-center" 
                        onPress={() => alert('Nahravat dokument')}
                    >
                        <Text className="text-white text-2xl font-bold">Nahrat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className="bg-green-500 p-4 rounded-lg h-64 w-80 items-center justify-center" 
                        onPress={() => alert('Skenovat dokument')}
                    >
                        <Text className="text-white text-2xl font-bold">Skenovat</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}