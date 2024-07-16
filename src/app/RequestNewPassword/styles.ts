import theme from '@/general/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    color: theme.colors.slate[500],
    fontFamily: theme.fonts.bold,
    maxWidth: 400,
    marginVertical: 32,
  },
  form: {
    rowGap: 32,
  },
});
