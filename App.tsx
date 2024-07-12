import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist';
import theme from '@/general/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <StatusBar
        translucent
        style='auto'
      />
    </View>
  );
}
