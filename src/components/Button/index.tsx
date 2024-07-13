import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  type: 'full' | 'outlined';
  label: string;
};

const Button = ({ type, label, ...rest }: ButtonProps) => {
  const typeStyle = type === 'full' ? styles.button : styles.buttonOutlined;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={typeStyle}
      {...rest}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
