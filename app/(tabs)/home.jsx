import React, { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import Header from '../../components/Header';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

async function refreshToken(storedToken, storedRefreshToken) {
  const refreshToken = await fetch('https://mba.bsfaplikace.cz/Auth/refresh', {
    method: 'POST',
    body: JSON.stringify({ 
      accessToken: storedToken,
      refreshToken: storedRefreshToken
    }),
  })
  if (response.status === 200) {
    const data = await response.json();
    SecureStore.deleteItemAsync('token');
    SecureStore.setItemAsync('token', data.accessToken);
  } else {
    SecureStore.deleteItemAsync('token');
    SecureStore.deleteItemAsync('refreshToken');
    router.replace('/');
  }
}

export default function home() {
  const storedToken = SecureStore.getItemAsync('token');
  const storedRefreshToken = SecureStore.getItemAsync('refreshToken');
  useEffect(() => {
      const getToken = async () => {
        try {
          if (!storedToken) {
            Alert.alert('Token nenalezen', 'Přihlašte se znovu.');
            router.replace('/');
            return;
          }
        } catch (error) {
          Alert.alert('Chyba', 'Nepodařilo se načíst token.');
        }
      };
      getToken();
    }, 
  []);
    
  useEffect(() => {
    const infoCard = async () => {
      const response = await fetch('https://mba.bsfaplikace.cz/InfoCard', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      if (response.status === 401) {
        refreshToken(storedToken, storedRefreshToken);
      } else {
        SecureStore.deleteItemAsync('token');
        SecureStore.deleteItemAsync('refreshToken');
        navigator.replace('/');
        return;
      }
    }
    infoCard();
  })

  return (
      <SafeAreaView>
          <Header/>
          <ScrollView className="p-4" contentContainerStyle={{paddingBottom: 20}}>
              <Card/><Text>{"\n"}</Text>
              <Card/><Text>{"\n"}</Text>
              <Card/><Text>{"\n"}</Text>
          </ScrollView>
      </SafeAreaView>
  )
}