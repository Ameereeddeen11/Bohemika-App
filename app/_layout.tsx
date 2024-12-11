import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GlobalProvider } from '../context/GlobalProvider';

export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown:false }} />
        <Stack.Screen name='(auth)/enter-email' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)/email-sended' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)/reset-password' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='messages' options={{ headerShown: false }} />
      </Stack>
      <StatusBar style='dark' />
    </GlobalProvider>
  );
}