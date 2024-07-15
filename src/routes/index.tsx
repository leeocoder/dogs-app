import Login from '@/app/Login';
import SignUp from '@/app/SignUp';
import theme from '@/general/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft, Pizza } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='SignUp'
        component={SignUp}
        options={({ navigation }) => ({
          headerTitle: '',
          headerBackTitleVisible: false,
          headerLeft: (props) => (
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
      />
    </Navigator>
  );
};

export default Routes;
