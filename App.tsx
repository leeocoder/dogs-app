import Login from '@/app/Login';
import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_700Bold,
  Urbanist_600SemiBold,
  useFonts,
} from '@expo-google-fonts/urbanist';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent={true}
        style='auto'
      />
      <Login />
    </View>
  );
}
