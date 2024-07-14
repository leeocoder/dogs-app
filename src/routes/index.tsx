import Login from '@/app/Login';
import SignUp from '@/app/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        options={{
          headerTitle: 'rola',
          headerStyle: {},
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
};

export default Routes;
