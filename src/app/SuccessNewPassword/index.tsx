import Button from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';
import Title from '@/components/Title';

import { Text, View } from 'react-native';

import { styles } from './styles';
import SuccessMark from '../assets/icons/success-mark.svg';

const SuccessNewPassword = () => {
  return (
    <View style={styles.container}>
      <SuccessMark
        width={100}
        height={100}
        style={styles.logo}
      />
      <Title text='Paw-sitivo!' />
      <Text style={styles.title}>
        Sua senha foi alterada com sucesso. Explore à vontade!
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          type='full'
          label='Voltar para o Login'
        />
      </View>
    </View>
  );
};

export default SuccessNewPassword;
