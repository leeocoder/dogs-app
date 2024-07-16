import Button from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';
import Title from '@/components/Title';

import { Text, View } from 'react-native';

import { styles } from './styles';

const SetNewPassword = () => {
  return (
    <View style={styles.container}>
      <Title text='Criar nova senha' />
      <Text style={styles.title}>
        Hora de renovar sua senha! Escolha uma que faça você abanar o rabo de
        felicidade.
      </Text>
      <View style={styles.form}>
        <PasswordInput placeholder='Nova senha' />
        <PasswordInput placeholder='Confirma nova senha' />
      </View>
      <Button
        type='full'
        label='Criar nova senha'
      />
    </View>
  );
};

export default SetNewPassword;
