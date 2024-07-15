import theme from '@/general/theme';

import { Eye, EyeOff } from 'lucide-react-native';
import React from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './styles';

const PasswordInput = ({ ...props }: TextInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={!isPasswordVisible}
        placeholder='Senha'
        placeholderTextColor={theme.colors.slate[400]}
        {...props}
      />
      <TouchableOpacity
        style={styles.togglePassword}
        activeOpacity={0.5}
        onPress={handleTogglePasswordVisibility}
      >
        {!isPasswordVisible && (
          <Eye
            size={20}
            color={theme.colors.slate[400]}
          />
        )}

        {isPasswordVisible && (
          <EyeOff
            size={20}
            color={theme.colors.slate[400]}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
