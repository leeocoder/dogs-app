import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewBase,
} from 'react-native';

import { styles } from './styles';
import Input from '@/components/Input';
import Button from '@/components/Button';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pronto para cavar diversão? Cadastre-se e descubra o que os rabos estão
        abanando.
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
        <Input
          placeholder='Senha'
          secureTextEntry
        />
        <Input
          placeholder='Confirmar a senha'
          secureTextEntry
        />
      </View>
      <Button
        label='Cadastrar'
        type='full'
        onPress={() => alert('Cadastrado com sucesso!')}
      />
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Já faz parte da matilha?</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.bottomText}>
            <Text style={[styles.bottomText, styles.linkLogin]}>Entre</Text>
          </TouchableOpacity>
          <Text style={styles.bottomText}> agora para explorar!</Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
