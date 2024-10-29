import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import Header from '../../components/Header';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

export default function home() {
  const [data, setData] = useState([]);
  const storedToken = SecureStore.getItemAsync('token');
  const storedRefreshToken = SecureStore.getItemAsync('refreshToken');
  useEffect(() => {
    const infoCard = async () => {
      const response = await fetch('https://mba.bsfaplikace.cz/Contract', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      // if (response.status === 401) {
      //   refreshToken(storedToken, storedRefreshToken);
      // } else {
      //   SecureStore.deleteItemAsync('token');
      //   SecureStore.deleteItemAsync('refreshToken');
      //   router.replace('/');
      // }
      const result = await response.json();
      setData(result);
    }
    infoCard();
  })

  const cards = data.map((card) => {
    return (
      <Card
        nazev={card.nazev}
        platnostOd={card.platnostOd}
        platnostDo={card.platnostDo}
      />
    )
  })

  return (
      <SafeAreaView>
          <Header/>
          <ScrollView className="p-4" contentContainerStyle={{paddingBottom: 20}}>
              {/* <Card/><Text>{"\n"}</Text>
              <Card/><Text>{"\n"}</Text>
              <Card/><Text>{"\n"}</Text> */}
              {cards}
          </ScrollView>
      </SafeAreaView>
  )
}