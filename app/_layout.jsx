import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name='login' options={{ headerShown:false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='messages' options={{ headerShown:false }} />
      </Stack>
      <StatusBar style='dark'/>
    </>
  );
}