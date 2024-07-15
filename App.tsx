import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito';

import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from '@/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <StatusBar
            translucent={true}
            style='auto'
          />
          <Routes />
        </View>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}
