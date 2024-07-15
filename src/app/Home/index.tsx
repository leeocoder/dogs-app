import Button from '@/components/Button';
import { RootStackParamList } from '@/routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Image, Text, View } from 'react-native';

import Logo from '../assets/icons/logo.svg';
import DogLogin from '../assets/images/dog-login.png';
import { styles } from './styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login',
  'SignUp'
>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={DogLogin}
          resizeMode='cover'
        />
        <View style={styles.logoContainer}>
          <Logo
            width={57}
            height={45}
          />
        </View>
      </View>
      <View style={styles.loginInputContainer}>
        <Text style={styles.messageLogin}>
          Descubra quem está abanando o rabo por aí!
        </Text>
        <View style={styles.buttons}>
          <Button
            label='Entrar'
            type='full'
            onPress={() => navigation.navigate('Login')}
          />

          <Button
            label='Cadastre-se'
            type='outlined'
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
