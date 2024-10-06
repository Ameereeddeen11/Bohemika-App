import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Profile() {
  const submit = () => {
    router.replace('/signin');
  } 
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-2xl font-bold">Profil</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text className="text-blue-600">Upravit</Text>
        </TouchableOpacity>
      </View>

      <View className="items-center mb-6">
        <Image
          source={{ uri: 'https://example.com/your-profile-pic.jpg' }} // Nahraďte URL vaší profilovou fotografií
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
      </View>

      <TouchableOpacity className="mt-auto bg-red-600 p-4 rounded-lg shadow" onPress={submit}>
        <Text className="text-white text-center text-lg">Odhlásit se</Text>
      </TouchableOpacity>
    </View>
  );
}
