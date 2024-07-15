import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_700Bold,
  Urbanist_600SemiBold,
  useFonts,
} from '@expo-google-fonts/urbanist';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from '@/routes';

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
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent={true}
          style='auto'
        />
        <Routes />
      </View>
    </NavigationContainer>
  );
}
