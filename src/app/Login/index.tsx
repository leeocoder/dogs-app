import Button from '@/components/Button';
import Input from '@/components/Input';
import PasswordInput from '@/components/PasswordInput';
import { RootStackParamList } from '@/routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import Title from '@/components/Title';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Title text='Login' />
      <Text style={styles.title}>
        Seja bem-vindo de volta! Junte-se à matilha e explore histórias caninas
        únicas ao redor do mundo.
      </Text>
      <View style={styles.form}>
        <Input
          placeholder='Usuário'
          autoCapitalize='none'
        />
        <PasswordInput />
      </View>
      <Button
        label='Entrar'
        type='full'
        onPress={() => alert('Cadastrado com sucesso!')}
      />

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Não faz parte da matilha?</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.bottomText}>Junte-se a nós! </Text>
          <TouchableOpacity
            style={styles.bottomText}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={[styles.bottomText, styles.linkLogin]}>
              Cadastre-se agora.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
