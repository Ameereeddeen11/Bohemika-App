import React, { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import Header from '../../components/Header';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

export default function home() {
    useEffect(() => {
        const getToken = async () => {
          try {
            const storedToken = await SecureStore.getItemAsync('token');
    
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
      }, []);

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