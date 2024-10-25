import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

export default function Messages() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20 }}>
                        Messages
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}