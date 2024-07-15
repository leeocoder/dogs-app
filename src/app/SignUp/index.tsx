import Button from '@/components/Button';
import Input from '@/components/Input';
import { RootStackParamList } from '@/routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { styles } from './styles';
import PasswordInput from '@/components/PasswordInput';
import Title from '@/components/Title';

type SingUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

const SignUp = () => {
  const navigation = useNavigation<SingUpScreenNavigationProp>();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Title text='Cadastro' />
        <Text style={styles.title}>
          Pronto para cavar diversão? Cadastre-se e descubra o que os rabos
          estão abanando.
        </Text>
        <View style={styles.form}>
          <Input
            placeholder='Usuário'
            autoCapitalize='none'
          />
          <Input
            placeholder='E-mail'
            autoCapitalize='none'
            autoComplete='email'
          />
          <PasswordInput />
          <PasswordInput placeholder='Confirmar Senha' />
        </View>
        <Button
          label='Cadastrar'
          type='full'
          onPress={() => alert('Cadastrado com sucesso!')}
        />
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Já faz parte da matilha?</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.bottomText}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={[styles.bottomText, styles.linkLogin]}>Entre</Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}> agora para explorar!</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
