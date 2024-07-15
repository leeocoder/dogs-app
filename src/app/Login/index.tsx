import Button from '@/components/Button';
import Input from '@/components/Input';

import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import PasswordInput from '@/components/PasswordInput';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Seja bem-vindo de volta! Junte-se à matilha e explore histórias caninas
        únicas ao redor do mundo.
      </Text>
      <View style={styles.form}>
        <PasswordInput />
        <Input
          placeholder='Usuário'
          autoCapitalize='none'
        />
        <Input
          placeholder='Senha'
          secureTextEntry={false}
        />
      </View>
      <Button
        label='Cadastrar'
        type='full'
        onPress={() => alert('Cadastrado com sucesso!')}
      />

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Não faz parte da matilha?</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.bottomText}>Junte-se a nós! </Text>
          <TouchableOpacity style={styles.bottomText}>
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
