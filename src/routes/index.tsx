import Home from '@/app/Home';
import Login from '@/app/Login';
import RequestNewPassword from '@/app/RequestNewPassword';
import SetNewPassword from '@/app/SetNewPassword';
import SignUp from '@/app/SignUp';
import theme from '@/general/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ArrowLeft } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator
      screenOptions={({ navigation }) => ({
        headerShadowVisible: false,
        headerTitle: '',
        headerBackTitleVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 12,
              padding: 10,
              borderColor: theme.colors.slate[300],
              marginLeft: 5,
            }}
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft
              size={19}
              color={theme.colors.primary[900]}
            />
          </TouchableOpacity>
        ),
      })}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='SignUp'
        component={SetNewPassword}
      />
      <Screen
        name='Login'
        component={Login}
      />
    </Navigator>
  );
};

export default Routes;
