import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import Logo from '../assets/icons/logo.svg';
import DogLogin from '../assets/images/dog-login.png';
import { styles } from './styles';

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
          <TouchableOpacity
            style={styles.buttonLogin}
            activeOpacity={0.5}
          >
            <Text style={styles.buttonLabel}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRegister}
            activeOpacity={0.5}
          >
            <Text style={styles.buttonLabel}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
