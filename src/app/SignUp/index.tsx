import { Text, TouchableOpacity, View } from 'react-native';

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

export default SignUp;
