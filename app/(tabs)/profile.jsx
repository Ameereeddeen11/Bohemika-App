import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { router, Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
// import * as SecureStore from 'expo-secure-store';
import Info from '../../components/Info';
import { useGlobalContext } from '../../context/GlobalProvider';

export default function Profile() {
  const [data, setData] = useState([]);
  const [accesstoken, setToken] = useState();
  const [refreshToken, setRefreshToken] = useState('');

  const { accessToken, logout } = useGlobalContext();

  const handleLogout = async () => {
    await logout();
    router.replace('/');
  }

  // useEffect(() => {
  //   setToken(accessToken);
  // }, [accessToken]);

  useEffect(() => {
    const loadTokens = async () => {
      const token = await SecureStore.getItemAsync('token');
      setToken(token);
    };
    loadTokens();
  }, []);

  useEffect(() => {
    if (accesstoken) { 
      const fetchData = async () => {
        try {
          const response = await fetch('https://mba.bsfaplikace.cz/Client/profile', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${accesstoken}`
            }
          });
          if (!response.ok) {
            console.error("Error fetching profile data");
            return;
          }
          const data2 = await response.json();
          setData(data2);
        } catch (error) {
          Alert.alert('Error', 'Failed to fetch profile data');
        }
      };
      fetchData();
    }
  }, [accesstoken]);
  
  const [collapsed, setCollapsed] = useState(false);
  const submit = () => {
    setCollapsed(!collapsed);
  }

  const modifiedData = {
    Email: data.email,
    Telefon: data.mobile,
    Narozeniny: data.birthday,
    'Trvalá adresa': data.permanentAddress,
    'Korespondenční adresa': data.correspondenceAddress
  }

  return (
    <SafeAreaView>
      <Header/>
      <ScrollView className="p-4" contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="flex-1 bg-gray-100 p-4">
          <UserInfo firstname={data.firstname} lastname={data.lastname} email={data.email} />
          <View className="space-y-4">
            {
              Object.entries(modifiedData).map(([key, value], index) => {
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
          <TouchableOpacity className="mt-auto bg-red-600 p-4 rounded-lg shadow my-4" onPress={handleLogout}>
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