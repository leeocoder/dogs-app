import theme from '@/general/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary[400],
    borderRadius: 8,
    paddingVertical: 18,
  },
  label: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.primary[800],
  },
  buttonOutlined: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 18,
    borderWidth: 2,
    borderColor: theme.colors.primary[400],
  },
});
