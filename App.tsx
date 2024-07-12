import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_700Bold,
  useFonts,
} from '@expo-google-fonts/urbanist';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Logo from './src/app/assets/icons/logo.svg';
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
      <Logo
        width={100}
        height={100}
      />
      <StatusBar
        translucent
        style='auto'
      />
    </View>
  );
}
