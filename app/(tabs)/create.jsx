import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import React from 'react';
import List from '../../components/List';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { id: '1', repo: 'Bohemika-App', title: 'Vas dokument', time: '1d', progress: false },
  { id: '2', repo: 'recipe', title: 'Vas dokument', time: '9d', progress: true },
  { id: '3', repo: 'Bohemika-App', title: 'Vas dokument', time: '1d', progress: true },
];

export default function Create() {
  return (
    <SafeAreaView>
      <Header />
      <View className="flex-row items-center justify-between p-4 border-b border-gray-400">
        <Text className="text-2xl font-semibold text-gray-800 mx-2 my-2">Dokumenty</Text>
        <TouchableOpacity
          className="bg-blue-600 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800"
          onPress={() => alert('Nahrávat dokument')}
        >
          <View className="flex-row items-center justify-between">
            <AntDesign name='pluscircleo' size={14} color="white" />
            <Text className="text-white text-sm font-semibold tracking-wide px-2">
              Nahrát
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {data.map((item, key) => (
        <List
          key={key}
          repo={item.repo}
          title={item.title}
          time={item.time}
          progress={item.progress}
        />
      ))}
    </SafeAreaView>
  );
}