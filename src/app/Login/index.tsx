import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import Logo from '../assets/icons/logo.svg';
import DogLogin from '../assets/images/dog-login.png';
import { styles } from './styles';
import Button from '@/components/Button';

const Login = () => {
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
          />

          <Button
            label='Cadastre-se'
            type='outlined'
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
