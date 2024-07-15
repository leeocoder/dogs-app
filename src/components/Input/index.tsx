import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';
import theme from '@/general/theme';

const Input = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={theme.colors.slate[400]}
      {...rest}
    />
  );
};

export default Input;
