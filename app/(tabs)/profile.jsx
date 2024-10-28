import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import * as SecureStore from 'expo-secure-store';
import Info from '../../components/Info';

export default function Profile() {
  const info = [
    {
      'title': 'Telefon',
      'info': '+420 123 456 789'
    },
    {
      'title': 'Adresa',
      'info': 'Ulice 123, Město, PSČ'
    },
    {
      'title': 'Číslo pojištění',
      'info': '987654321'
    },
    {
      'title': 'Trvale bydliste',
      'info': 'Praha 7'
    }
  ];

  const info2 = [
    {
      'title': 'Telefon',
      'info': '+420 123 456 789'
    },
    {
      'title': 'Adresa',
      'info': 'Ulice 123, Město, PSČ'
    },
    {
      'title': 'Číslo pojištění',
      'info': '987654321'
    },
    {
      'title': 'Trvale bydliste',
      'info': 'Praha 7'
    }
  ]

  const [collapsed, setCollapsed] = useState(false);
  const submit = () => {
    setCollapsed(!collapsed);
  }
  const logout = async () => {
    await SecureStore.deleteItemAsync('token');
    await SecureStore.deleteItemAsync('refreshToken');
    router.replace('/');
  }
  return (
    <SafeAreaView>
      <Header/>
      <ScrollView className="p-4" contentContainerStyle={{paddingBottom: 20}}>
        <View className="flex-1 bg-gray-100 p-4">
          <UserInfo firstname="Jan" lastname="Novak" email="jan.novak@email.cz" />
          <View className="space-y-4">
            { info.map((info) => <Info title={info.title} info={info.info} /> ) }
          </View>
          <View className="space-y-4">
            <View style={collapsed ? styles.showView : styles.nowShowView}>
              { info2.map((info) => <Info title={info.title} info={info.info} /> ) }
            </View>
            <TouchableOpacity onPress={submit} className='my-4'>
              <Text className="text-blue-500 text-center text-lg">{!(collapsed) ? 'Ukazat vic' : 'Ukazat min'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="mt-auto bg-red-600 p-4 rounded-lg shadow" onPress={logout}>
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
  },
  showView: {
    display: 'block',
  },
  nowShowView: {
    display: 'none',
  }
});