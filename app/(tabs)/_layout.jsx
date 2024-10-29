import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import * as SecureStore from 'expo-secure-store';

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

export default function TabLayout() {
  const storedToken = SecureStore.getItemAsync('token');
  const storedRefreshToken = SecureStore.getItemAsync('refreshToken');
  if (!storedToken || !storedRefreshToken) {
    router.replace('/');
  } else if (!storedToken) {
    refreshToken(storedToken, storedRefreshToken);
  } else {
    const TabIcon = ({ name, color }) => (
      <Icon2 name={name} size={20} color={color} />
    );
  
    const TabIcon2 = ({ name, color, size }) => (
      <Icon name={name} size={size} color={color} />
    );
  
    return (
      <>
        <Tabs>
          <Tabs.Screen 
            name='home' 
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: () => (
                <TabIcon2 name='home' color='blue' size={20} />
              )
            }} />
            <Tabs.Screen 
            name='create' 
            options={{
              title: 'Create',
              headerShown: false,
              tabBarIcon: () => (
                <TabIcon2 name='circle-with-plus' color='blue' size={30} />
              )
            }} />
            <Tabs.Screen 
              name='profile' 
              options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: () => (
                  <TabIcon name='person' color='blue' />
                )
              }} 
            />
        </Tabs>    
        <StatusBar style='dark' />
      </>
    );
  }
}