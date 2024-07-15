import theme from '@/general/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.slate[300],
    backgroundColor: theme.colors.slate[50],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    fontFamily: theme.fonts.medium,
    paddingHorizontal: 18,
    paddingVertical: 18,
    fontSize: 16,
    width: '85%',
    color: theme.colors.slate[800],
  },
  togglePassword: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
