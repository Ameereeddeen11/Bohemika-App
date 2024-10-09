import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';
import Collapsible from 'react-native-collapsible';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const submit = () => {
    router.replace('/');
  } 
  const [collapsed, setCollapsed] = useState(false);
  const submit2 = () => {
    setCollapsed(!collapsed);
  }
  return (
    <SafeAreaView>
      <ScrollView className="p-4" contentContainerStyle={{paddingBottom: 20}}>
        <View className="flex-1 bg-gray-100 p-4">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-2xl font-bold">Profil</Text>
          </View>

          <View className="items-center mb-6">
            <Image
              source={require('../../assets/images/unknown.jpg')} // Nahraďte URL vaší profilovou fotografií
              className="w-32 h-32 rounded-full"
            />
            <Text className="mt-4 text-xl font-semibold">Jan Novák</Text>
            <Text className="text-gray-600">jan.novak@example.com</Text>
          </View>

          <View className="space-y-4">
            <View className="bg-white p-4 rounded-lg shadow">
              <Text className="text-gray-700">Telefon: +420 123 456 789</Text>
            </View>
            <View className="bg-white p-4 rounded-lg shadow">
              <Text className="text-gray-700">Adresa: Ulice 123, Město, PSČ</Text>
            </View>
            <View className="bg-white p-4 rounded-lg shadow">
              <Text className="text-gray-700">Číslo pojištění: 987654321</Text>
            </View>
            <View className="bg-white p-4 rounded-lg shadow">
              <Text className="text-gray-700">Trvale bydliste: Praha 7</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Button title={collapsed ? 'Show More' : 'Show Less'} onPress={submit2} />
            <Collapsible collapsed={collapsed} className="space-y-4">
              <View className="bg-white p-4 rounded-lg shadow">
                <Text className="text-gray-700">Datum narození: 1.1.1990</Text>
              </View>
              <View className="bg-white p-4 rounded-lg shadow">
                <Text className="text-gray-700">Rodné číslo: 900101/1234</Text>
              </View>
              <View className="bg-white p-4 rounded-lg shadow">
                <Text className="text-gray-700">Pohlaví: Muž</Text>
              </View>
              <View className="bg-white p-4 rounded-lg shadow">
                <Text className="text-gray-700">Výška: 180 cm</Text>
              </View>
              <View className="bg-white p-4 rounded-lg shadow">
                <Text className="text-gray-700">Váha: 80 kg</Text>
              </View>
            </Collapsible>
          </View>

          <TouchableOpacity className="mt-auto bg-red-600 p-4 rounded-lg shadow" onPress={submit}>
            <Text className="text-white text-center text-lg">Odhlásit se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
});