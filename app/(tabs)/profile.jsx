import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import * as SecureStore from 'expo-secure-store';
import Info from '../../components/Info';

export default function Profile() {
  // const info = [
  //   {
  //     'title': 'Telefon',
  //     'info': '+420 123 456 789'
  //   },
  //   {
  //     'title': 'Adresa',
  //     'info': 'Ulice 123, Město, PSČ'
  //   },
  //   {
  //     'title': 'Číslo pojištění',
  //     'info': '987654321'
  //   },
  //   {
  //     'title': 'Trvale bydliste',
  //     'info': 'Praha 7'
  //   }
  // ];

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

  const [data, setData] = useState([]);
  const [accesstoken, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = await SecureStore.getItemAsync('token');
      const refreshToken = await SecureStore.getItemAsync('refreshToken');
      if (token) {
        setToken(token);
      }
      setRefreshToken(refreshToken);
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    if (accesstoken) { // Only fetch data if accesstoken is available
      const fetchData = async () => {
        try {
          const response = await fetch('https://mba.bsfaplikace.cz/Client/profile', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${accesstoken}`
            }
          });
          if (!response.ok) {
            console.error("Error fetching profile data:", response.status, response.statusText);
            return;
          }
          const data2 = await response.json();
          setData(data2);
        } catch (error) {
          console.error("Error parsing profile data:", error);
        }
      };
      fetchData();
    }
  }, [accesstoken]);
  
  const [collapsed, setCollapsed] = useState(false);
  const submit = () => {
    setCollapsed(!collapsed);
  }
  const logout = async () => {
    await SecureStore.deleteItemAsync('token');
    await SecureStore.deleteItemAsync('refreshToken');
    router.replace('/');
  }

  const modifiedData = {
    jmeno: data.firstname,
    prijmeni: data.lastname,
    email: data.email,
    telefon: data.mobile,
    narozeniny: data.birthdate,
    'trvale bydliste': data.permanentAddress,
    'tehdejsi bydliste': data.correspondenceAddress
  }

  return (
    <SafeAreaView>
      <Header/>
      <ScrollView className="p-4" contentContainerStyle={{paddingBottom: 20}}>
        <View className="flex-1 bg-gray-100 p-4">
          <UserInfo firstname={data.firstname} lastname={data.lastname} email={data.email} />
          <View className="space-y-4">
            {
              Object.entries(modifiedData).map(([key, value], index) => {
                // if (index < 4) {
                //   return null;
                // }
                return <Info key={index} title={key} info={value} />;
              })
            }
          </View>
          {/* <View className="space-y-4">
            <View style={collapsed ? styles.showView : styles.nowShowView}>
              { info2.map((info, index) => <Info key={index} title={info.title} info={info.info} /> ) }
            </View>
            <TouchableOpacity onPress={submit} className='my-4'>
              <Text className="text-blue-500 text-center text-lg">{!(collapsed) ? 'Ukazat vic' : 'Ukazat min'}</Text>
            </TouchableOpacity>
          </View> */}
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