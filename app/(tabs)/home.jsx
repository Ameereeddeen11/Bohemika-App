import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import Header from '../../components/Header';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

export default function home() {
  const [storedToken, setStoredToken] = useState(null);
  const [storedRefreshToken, setStoredRefreshToken] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadTokens = async () => {
      const token = await SecureStore.getItemAsync('token');
      const refreshToken = await SecureStore.getItemAsync('refreshToken');
      setStoredToken(token);
      setStoredRefreshToken(refreshToken);
    };
    loadTokens();
  }, []);

  useEffect(() => {
    const infoContract = async () => {
      try {
        const request = await fetch(
          'https://mba.bsfaplikace.cz/Contract',
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${storedToken}`,
            },
          }
        );
        const result = await request.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    infoContract();
  })

  const card = data.map((card, index) => (
    <Card
      key={index}
      number={card.number}
      nazev={card.product}
      platnostOd={card.dateValidityFrom.split('T')[0]}
      platnostDo={card.dateValidityTo.split('T')[0]}
    />
  ));

  return (
    <SafeAreaView>
      <Header />
      <ScrollView className="p-4" contentContainerStyle={{ paddingBottom: 20 }}>
        {card}
      </ScrollView>
    </SafeAreaView>
  );
}