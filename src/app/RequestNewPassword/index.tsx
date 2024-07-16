import Title from '@/components/Title';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Input from '@/components/Input';
import Button from '@/components/Button';

const RequestNewPassword = () => {
  return (
    <View style={styles.container}>
      <Title text='Perdeu a senha ?' />
      <Text style={styles.title}>
        Deixe que seu 'au-migo' ajude a 'cavar' uma nova senha para você!
      </Text>
      <View style={styles.form}>
        <Input
          placeholder='Digite seu E-mail'
          autoCapitalize='none'
        />
        <Button
          type='full'
          label='Recuperar Senha'
        />
      </View>
    </View>
  );
};

export default RequestNewPassword;
